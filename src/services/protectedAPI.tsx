import axios from "axios";
import { BASE_URL } from "./publicAPI";

const protectedAPI = axios.create({ baseURL: BASE_URL });

protectedAPI.interceptors.request.use((config) => {
  const access_token = localStorage.getItem("access_token");
  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  return config;
});

export async function getUserData() {
  try {
    const res = await protectedAPI.get("/api/accounts/me/");
    console.log(res);

    return res;
  } catch (error) {
    console.error(error);
  }
}

export async function addNewURL(url: string, title: string) {
  try {
    const res = await protectedAPI.post("/api/links/", {
      url,
      title,
    });

    return res.data;
  } catch (error) {
    console.error(error);
  }
}
