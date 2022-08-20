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
  const {data} = await instance.post('/account/verify-pin', payload);

  return data;
};

