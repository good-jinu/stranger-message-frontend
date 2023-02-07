import { get } from '@/api';
import { setCookie } from '@/utils/cookieIO';
import { decodeJWT } from '@/utils/jwt';

const REGISTER = '/auth/register';

async function register() {
  const res = await get(REGISTER);
  setCookie("access_token", res.data.token);
}

export { register };