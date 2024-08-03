export interface Photo {
    id: string;
    urls: {
      regular: string;
      small: string;
    };
    alt_description: string;
  }