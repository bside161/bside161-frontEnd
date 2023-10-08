import axios from 'axios';

const query = axios.create({
  baseURL: 'http://15.164.242.20',
  withCredentials: true,
});

export const AuthKakao = async (code) => {
  try {
    const response = await query.get('/auth/idpresponse/kakao', {
      params: {
        code,
      },
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
