import axios from 'axios';

const host = window.location.hostname === 'localhost' ? 'http://{your server URL}' : 'api';

const query = axios.create({
  baseURL: host,
  withCredentials: true,
});

export const AuthKakao = async (code) => {
  try {
    const response = await query.get('/api/auth/idpresponse/kakao', {
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
    const kakaoResponse = await query.get('/api/profiles', {
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
