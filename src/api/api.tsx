import axios from 'axios';

const host = window.location.hostname === 'localhost' ? 'http://15.164.242.20/api' : '/api';

axios.defaults.withCredentials = true;

const query = axios.create({
  baseURL: host,
  withCredentials: true,
});

export const AuthKakao = async () => {
  try {
    const response = await query.get('/auth/idpresponse/kakao', {
      withCredentials: true,
    });
    if (response.data) {
      return response;
    }

    throw new Error('fail');
  } catch (error) {
    console.log('err', error);
    throw new Error(error);
  }
};

export const AuthKakaoMe = async (token: string) => {
  try {
    const kakaoResponse = await query.get('/profiles', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (kakaoResponse) {
      return kakaoResponse;
    }

    throw new Error('fail');
  } catch (error) {
    throw new Error(error);
  }
};
