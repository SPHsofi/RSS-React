const API_URL: string = 'https://stapi.co/api/v1/rest/animal/search?pageNumber=2&pageSize=10';

export interface Animal {
  uid: string;
  name: string;
  earthAnimal: boolean;
  earthInsect: boolean;
  avian: boolean;
  canine: boolean;
  feline: boolean;
}

interface Page {
  firstPage: boolean;
  lastPage: boolean;
  numberOfElements: number;
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}

interface Sort {
  clauses: [];
}

interface ServerResponse {
  page: Page;
  sort: Sort;
  animals: Animal[];
}

const animal = async (): Promise<Animal[]> => {
  try {
    const response = await fetch(`${API_URL}`);

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const data: ServerResponse = await response.json();
    return data.animals;
  } catch (error) {
    console.error('API error:', error);
  }
};

export default animal;
