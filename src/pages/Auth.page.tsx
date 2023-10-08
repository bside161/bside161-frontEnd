import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { AuthKakao } from '../api/api';

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const code = params.get('token');
    AuthKakao(code)
      .then((res) => {
        navigate(`/profile/${code}`);
      })
      .catch((err) => {
        navigate('/login');
      });
  }, []);
  return <div>~~~~~~~~~~~~~~~~~~~~~~</div>;
};

export default Auth;
