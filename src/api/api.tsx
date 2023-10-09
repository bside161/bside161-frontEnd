import axios from 'axios';

const query = axios.create({
  baseURL: 'http://15.164.242.20',
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
    const kakaoResponse = await axios.post('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (kakaoResponse) {
      return kakaoResponse;
    }

    throw new Error('fail');
  } catch (error) {
    console.log('err', error);
    throw new Error(error);
  }
};
