import {instance} from '../axiosConfig';

export const loginInService = async payload => {
  const {data} = await instance.post('/account/login', payload);

  return data;
};


export const verifyService = async payload => {
  const {data} = await instance.post('/account/verify-pin', payload);

  return data;
};

export const registerService = async payload => {
  const {data} = await instance.post('/account/register', payload);

  return data;
};


export const resendSmsService = async payload => {
  const {data} = await instance.post('/account/resend', payload);

  return data;
};

export const serialIdService = async payload => {
  const {data} = await instance.post('/account/login/backup', payload);

  return data;
};

