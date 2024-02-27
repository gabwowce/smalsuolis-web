import { useFormik } from 'formik';
import { useState } from 'react';
import { useMutation } from 'react-query';
import styled from 'styled-components';
import Button from '../components/buttons/Button';
import PasswordField from '../components/fields/PasswordField';
import TextField from '../components/fields/TextField';
import ContentLayout from '../components/layouts/ContentLayout';
import PasswordCheckListContainer from '../components/other/PasswordCheckListContainer';
import { useAppSelector } from '../state/hooks';
import { handleToastSuccess } from '../utils';
import api from '../utils/api';
import { buttonsTitles, inputLabels, validationTexts } from '../utils/texts';

interface ProfileForm {
  password: string;
  repeatPassword: string;
  email: string;
}

const Profile = () => {
  const [allValid, setAllValid] = useState(false);
  const user = useAppSelector((state) => state.user.userData);

  const { mutateAsync, isLoading } = useMutation(
    (values: Partial<ProfileForm>) => {
      return api.updateProfile(values);
    },
    {
      onSuccess: () => {
        handleToastSuccess(validationTexts.profileUpdated);
      },
    },
  );

  const { values, setFieldValue, handleSubmit, setErrors } = useFormik({
    initialValues: {
      password: '',
      repeatPassword: '',
      email: user?.email || '',
    } as ProfileForm,
    onSubmit: (values) => {
      const form: Partial<ProfileForm> = { ...values };
      delete form.email;
      mutateAsync(form);
    },
  });

  const handleType = (field: string, value: string | boolean) => {
    setFieldValue(field, value);
    setErrors({});
  };

  const { repeatPassword, password } = values;

  const disableSubmit = isLoading || ((!!password || !!repeatPassword) && !allValid);

  return (
    <ContentLayout>
      <PasswordContainer noValidate onSubmit={handleSubmit}>
        <TextField label={inputLabels.email} value={values.email} name="email" disabled={true} />

        <PasswordField
          value={password}
          name="password"
          onChange={(value) => handleType('password', value)}
          label={inputLabels.password}
        />
        <PasswordField
          value={repeatPassword}
          name="repeatPassword"
          onChange={(value) => handleType('repeatPassword', value)}
          label={inputLabels.password}
        />
        <PasswordCheckListContainer
          setAllValid={setAllValid}
          password={password}
          repeatPassword={repeatPassword}
        />
        <StyledButton loading={isLoading} disabled={disableSubmit} type="submit">
          {buttonsTitles.update}
        </StyledButton>
      </PasswordContainer>
    </ContentLayout>
  );
};

export default Profile;

const PasswordContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

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
