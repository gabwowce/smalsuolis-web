import { useNavigate } from 'react-router';
import styled from 'styled-components';
import Button from '../components/buttons/Button';
import LoaderComponent from '../components/other/LoaderComponent';
import { useSetPassword, useVerifyUser } from '../utils/hooks';
import { slugs } from '../utils/routes';
import { buttonsTitles, descriptions } from '../utils/texts';
import UserForm from '../components/forms/UserForm';

const ResetPassword = () => {
  const navigate = useNavigate();
  const { isLoading, data } = useVerifyUser();
  const {
    mutateAsync: setPasswordMutation,
    isSuccess,
    isLoading: isSubmitLoading,
  } = useSetPassword();

  if (isLoading) {
    return <LoaderComponent />;
  }

  return !isSuccess ? (
    <UserForm user={data?.user} onSubmit={setPasswordMutation} isLoading={isSubmitLoading} />
  ) : (
    <SuccessContainer>
      <Description>{descriptions.passwordChanged}</Description>
      <Button onClick={() => navigate(slugs.login)}>{buttonsTitles.login}</Button>
    </SuccessContainer>
  );
};

export default ResetPassword;

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  width: 100%;
`;

const StyledButton = styled(Button)`
  margin-top: 32px;
`;

const Description = styled.div`
  text-align: center;
`;
