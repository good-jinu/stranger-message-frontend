import React from 'react';
import { register } from '@/services/auth';
import { setCookie, getCookie } from '@/utils/cookieIO';
import { decodeJWT } from '@/utils/jwt';

const RegisterHook = () => {
  const [id, setId] = React.useState(0);

  React.useEffect(() => {
    if(!getCookie("access_token")) {
      register()
      .then(tok => {
        const jwtDecoded = decodeJWT(tok);
        setCookie("access_token", tok, new Date(jwtDecoded.exp * 1000));
        setId(jwtDecoded.sub);
      })
    }
  }, [])
}

export { RegisterHook };