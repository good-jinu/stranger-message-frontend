const decodeJWT = (token: string) => {
  if(typeof window !== 'undefined') {
    const base64Url = token.split('.')[1];
    if(base64Url !== undefined){
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
    }
  }
  return '';
};

export { decodeJWT };