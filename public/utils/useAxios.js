import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const getToken = () => {
  let token;
    if (typeof window !== "undefined") {
      token = localStorage.getItem("token") || "{}";
    }
    return token;
  };
  

const useAxios = async function apiRequest(request){
    const token = await getToken()
    const resp = await axios.request({
        ...request,
        headers: {
            ...request.headers,
            authorization: `Bearer ${token}`,
            mode: "cors",
        },
    });
    
    if (resp.status === 401) {
    }
    return resp;
};

export const userDetails = () => {
  const detials = localStorage.getItem('userDetails');
  const parsed = JSON.parse(detials);
  return parsed
}

export default useAxios;
