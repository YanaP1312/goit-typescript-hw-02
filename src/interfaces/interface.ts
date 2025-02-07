export interface User {
  id: string;
  username: string;
  portfolio_url?: string;
  profile_image?: {
    small?: string;
  };
}

export interface Image {
  id: string;
  likes?: number;
  description?: string;
  user: User;
  urls: {
    regular: string;
    small: string;
  };
  links: {
    download?: string;
  };
}

export interface DataList {
  total: number;
  total_pages: number;
  results: Image[];
}
