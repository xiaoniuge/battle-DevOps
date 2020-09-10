import { message } from 'antd';
const baseUrl = 'http://192.168.1.115:8080';
export const request = {
  // 请求拦截
  requestInterceptors: [
    (url, options) => {
      let fullUrl;
      fullUrl = baseUrl + url;
      return {
        url: fullUrl,
        ...options,
      };
    },
  ],
  // 响应拦截
  responseInterceptors: [
    async (res) => {
      if (!res || !res.status) {
        message.error('响应超时！');
        return;
      }
      const { status } = res;
      if (status === 200) {
        return res;
      }
      return res;
    },
    async (res) => {
      const data = await res.clone().json();
      return res;
    },
  ],
};
