import {instance} from '../axiosConfig';

export const fetchUser = async () => {
  const {data} = await instance.get('/auth');

  return data;
};

export const fetchNotifications = async () => {
  const {data} = await instance.get('/notification');

  return data;
};

export const updateProfile = async payload => {
  const {data} = await instance.post('/account/settings/profile', payload);

  return data;
};

export const withdrawFunds = async payload => {
  const {data} = await instance.post('/withdraw', payload);

  return data;
};

export const FundWallet = async id => {
  const {data} = await instance.post(`/fund/${id}`,);

  return data;
};

export const requestId = async () => {
  const {data} = await instance.post(`/account/settings/new-backup`,);

  return data;
};

export const getPrivateVideos = async () => {
  const {data} = await instance.get(`/private-live`,);

  return data;
};
