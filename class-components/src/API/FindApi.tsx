import { Animal } from './api.tsx';

export interface Resp {
  animal: Animal;
}

const API_URL: string = 'https://stapi.co/api/v1/rest/animal';

const findApi = async (uid: string): Promise<Resp | undefined> => {
  try {
    const response = await fetch(`${API_URL}?uid=${uid}`);

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const data: Resp = await response.json();
    return data;
  } catch (error) {
    console.error('API error:', error);
  }
};

export default findApi;
