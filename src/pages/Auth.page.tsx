import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { AuthKakao, AuthKakaoMe } from '../api/api';

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    // const code = params.get('token');
    const code = '129|4BMiJDB5tD37uQo7pYaN9dPBkFxJckwxbizsUoqC3ae5a768';
    // AuthKakao(code)
    //   .then((res) => {
    //     navigate(`/profile/${code}`);
    //   })
    //   .catch((err) => {
    //     navigate('/login');
    //   });
    AuthKakaoMe(code)
      .then((res) => {
        console.log('res', res);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, []);
  return <div>~~~~~~~~~~~~~~~~~~~~~~</div>;
};

export default Auth;
