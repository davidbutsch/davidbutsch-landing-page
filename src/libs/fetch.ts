import { env } from "@/common";
import { getIdToken } from "@/modules/auth/utilities";

const idToken = await getIdToken();

function createApi() {
  return async function api(path: string, options: RequestInit = {}) {
    const url = `${env.API_URL}${path}`;

    const headers = {
      ...(options.headers || {}),
      Authorization: `Bearer ${idToken}`,
      "Content-Type": "application/json",
    };

    return fetch(url, {
      ...options,
      headers,
    });
  };
}

export const api = await createApi();
