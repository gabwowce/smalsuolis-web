import { useState } from 'react';
import styled from 'styled-components';
import Icon from '../components/Icons';
import { device } from '../styles';
import { IconName } from '../utils';
import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';
import Loader from '../components/Loader';
import Datepicker from '../components/Datepicker';
import { format, startOfDay } from 'date-fns';

const bannerUrl = '/stats_banner.png';

const Stats = () => {
  const [deforestationStatsFilter, setDeforestationStatsFilter] = useState('count');
  const [startDate, setStartDate] = useState(new Date());

  const { data, isLoading } = useQuery({
    queryKey: ['stats', startDate],
    queryFn: () => api.getStats(format(startOfDay(new Date(startDate)), 'yyyy-MM-dd')),
  });

  const mainStatsData = [
    { label: 'Naujų įvykių', count: data?.count, icon: IconName.heart },
    {
      label: 'Naujų kirtimų leidimų',
      count: data?.byApp?.miskoKirtimai?.count,
      icon: IconName.forest,
    },
    {
      label: 'Naujų žuvinimų',
      count: data?.byApp?.izuvinimas?.count,
      icon: IconName.fishThin,
    },
    {
      label: 'Naujų statybos leidimų',
      count: data?.byApp?.infostatyba?.count,
      icon: IconName.house,
    },
  ];

  const constructionsStatsByTag = data?.byApp?.infostatyba?.byTag;
  const deforestationStatsByTag = data?.byApp?.miskoKirtimai?.byTag;

  const constructionsStatsArray =
    constructionsStatsByTag &&
    Object.keys(constructionsStatsByTag).reduce((acc, key) => {
      acc.push({ label: key, count: constructionsStatsByTag[key].count });
      return acc;
    }, []);

  const highestConstructionsStatsNumber = constructionsStatsByTag
    ? Object.keys(constructionsStatsByTag).reduce((acc, key) => {
        return acc < constructionsStatsByTag[key].count ? constructionsStatsByTag[key].count : acc;
      }, 0)
    : 1;

  const deforestationStatsArray =
    deforestationStatsByTag &&
    Object.keys(deforestationStatsByTag).reduce((acc, key) => {
      acc.push({
        label: key,
        count: deforestationStatsByTag[key].count,
        area: deforestationStatsByTag[key].area,
      });
      return acc;
    }, []);

  const highestDeforestationStatsNumber = deforestationStatsByTag
    ? Object.keys(deforestationStatsByTag).reduce((acc, key) => {
        const amount = deforestationStatsByTag[key][deforestationStatsFilter];
        return acc < amount ? amount : acc;
      }, 0)
    : 1;

  return data || !isLoading ? (
    <MainContainer>
      <BannerImageContainer>
        <Image src={bannerUrl} />
      </BannerImageContainer>
      <Content>
        <Datepicker onChange={(time) => setStartDate(time)} value={startDate} />
        <Row>
          <MainStatsWrapper>
            {mainStatsData.map((item) => (
              <MainStatsItem>
                <IconWrapper>
                  <StyledIcon name={item.icon} />
                </IconWrapper>
                <StatsInfoContainer>
                  <StatsNumber>{item.count || '-'}</StatsNumber>
                  <StatsLabel>{item.label}</StatsLabel>
                </StatsInfoContainer>
              </MainStatsItem>
            ))}
          </MainStatsWrapper>
          <DetailedStatsWrapper>
            <StatsHeader>Statybų leidimai</StatsHeader>

            {constructionsStatsArray?.map(({ label, count }) => {
              const statsPercentage = (count * 100) / highestConstructionsStatsNumber;
              return (
                <>
                  <DetailedStatsRow key={label}>
                    <InfoLabel>{label}</InfoLabel>
                    <AmountLabel>{count}</AmountLabel>
                  </DetailedStatsRow>
                  <InfoBarWrapper>
                    <InfoBar $percentage={statsPercentage} />
                  </InfoBarWrapper>
                </>
              );
            })}
          </DetailedStatsWrapper>

          <DetailedStatsWrapper>
            <RowContainer>
              <StatsHeader>Kirtimų leidimai</StatsHeader>
              <SliderWrapper>
                <SliderButton
                  onClick={() => setDeforestationStatsFilter('count')}
                  $isActive={deforestationStatsFilter === 'count'}
                >
                  <SwitchLabel>Leidimų skaičius</SwitchLabel>
                </SliderButton>
                <SliderButton
                  onClick={() => setDeforestationStatsFilter('area')}
                  $isActive={deforestationStatsFilter === 'area'}
                >
                  <SwitchLabel>Kertamas plotas</SwitchLabel>
                </SliderButton>
              </SliderWrapper>
            </RowContainer>
            {deforestationStatsArray?.map(({ label, count, area }) => {
              const statsPercentage =
                ((deforestationStatsFilter === 'count' ? count : area) * 100) /
                highestDeforestationStatsNumber;
              return (
                <>
                  <DetailedStatsRow key={label}>
                    <InfoLabel>{label}</InfoLabel>
                    <AmountLabel>
                      {deforestationStatsFilter === 'count' ? count : `${area} ha`}
                    </AmountLabel>
                  </DetailedStatsRow>
                  <InfoBarWrapper>
                    <InfoBar $percentage={statsPercentage} />
                  </InfoBarWrapper>
                </>
              );
            })}
          </DetailedStatsWrapper>
        </Row>
      </Content>
    </MainContainer>
  ) : (
    <Loader />
  );
};

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  @media ${device.desktop} {
    max-width: 1520px;
  }
`;

const BannerImageContainer = styled.div`
  width: 100%;
  margin-bottom: -5px;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  @media ${device.desktop} {
    border-radius: 32px;
  }
`;

const Content = styled.div`
  padding: 40px 0px;
  @media ${device.tablet} {
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 40px 24px;
    margin-top: 0px;
  }
`;

const Row = styled.div`
  align-items: center;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-top: 40px;
  gap: 24px;
  @media ${device.tablet} {
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.colors.background};
    flex-direction: column;
  }
`;

const MainStatsWrapper = styled.div`
  flex-direction: column;
  width: 30%;
  @media ${device.tablet} {
    width: 100%;
  }
`;

const MainStatsItem = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 32px;
  padding: 16px;
  gap: 16px;
  margin-bottom: 24px;
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledIcon = styled(Icon)`
  height: 32px;
  width: 32px;
  color: ${({ theme }) => theme.colors.tertiary};
`;

const StatsInfoContainer = styled.div`
  flex-direction: column;
`;

const StatsNumber = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 2rem;
  font-weight: 800;
  line-height: 40px;
`;

const StatsLabel = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 22px;
`;

const DetailedStatsWrapper = styled.div`
  flex-direction: column;
  background-color: white;
  border-radius: 32px;
  padding: 32px;
  width: 35%;
  display: flex;
  @media ${device.tablet} {
    width: 100%;
  }
`;

const StatsHeader = styled.div`
  color: black;
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 26px;
  margin-bottom: 32px;
  min-width: 200px;
`;

const InfoLabel = styled.div`
  color: #0e0e0e;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 18px;
`;

const AmountLabel = styled.div`
  color: #0e0e0e;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 18px;
  min-width: 100px;
  text-align: end;
`;

const SwitchLabel = styled.div`
  color: #0e0e0e;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 18px;
`;

const InfoBarWrapper = styled.div`
  height: 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
`;

const InfoBar = styled.div<{ $percentage: number }>`
  height: 8px;
  width: ${({ $percentage }) => `${$percentage}%`};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
`;

const DetailedStatsRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  margin-top: 12px;
`;

const SliderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 32px;
  align-self: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const SliderButton = styled.div<{ $isActive: boolean }>`
  border-radius: 32px;
  padding: 12px;
  cursor: pointer;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primary : theme.colors.background};
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default Stats;
