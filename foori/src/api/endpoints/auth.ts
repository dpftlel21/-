import { LoginData, SignUpData } from '../../types/auth.type';
import { getData, postData } from '../api';
import { cookieStorage } from '../utils/cookies';

export const loginUser = (loginData: LoginData) =>
  postData('api/auth/login', loginData);

export const registerUser = (signUpData: SignUpData) =>
  postData('api/auth/register', signUpData);

export const verifyEmail = (email: string) =>
  postData('api/mail/send-verification', { email });

export const verifyCode = (code: string) =>
  postData('api/mail/verify-code', { code });

export const getUserProfile = () => getData('api/users/user-profile');

export const refreshToken = async () => {
  const accessToken = cookieStorage.getToken();
  const refreshToken = cookieStorage.getRefreshToken();
  if (!refreshToken) throw new Error('No refresh token found');

  return postData('api/auth/token/refresh', {
    refreshToken,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const verifyToken = () => getData('api/auth/token/verify');
