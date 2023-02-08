import { get } from '@/api';
import { setCookie } from '@/utils/cookieIO';
import { decodeJWT } from '@/utils/jwt';

const REGISTER = '/auth/register';

async function register() {
  try {
    const res = await get(REGISTER);
    return res.data.token;
  } catch(e) {
    console.error(e);
  }
}

export { register };