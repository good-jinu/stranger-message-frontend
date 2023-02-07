import React from 'react';
import { register } from '@/services/auth';

const RegisterHook = () => {
  React.useEffect(() => {
    register();
  }, [])
}

export { RegisterHook };