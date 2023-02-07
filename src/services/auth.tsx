import { get } from '@/api';
import { setCookie } from '@/utils/cookieIO';

const REGISTER = '/auth/register';

async function register() {
  const res = await get(REGISTER);
  setCookie("access_token", res.data.token);
}

export { register };