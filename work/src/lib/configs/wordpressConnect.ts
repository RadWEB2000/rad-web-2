import axios, { AxiosResponse } from "axios";
import https from "https";

type tWordpressConnect = {
  key: string;
  query: string;
};

export default async function wordpressConnect({
  key,
  query,
}: tWordpressConnect): Promise<any> {
  const body = { query };
  try {
    const response: AxiosResponse = await axios
      .post(`${key}`, body, {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      })
      .then((response) => response);
    return response.data;
  } catch (error) {
    throw new Error(`Error connect with API: ${error}`);
  }
}
