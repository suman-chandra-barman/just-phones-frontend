export type TPhone = {
  _id: string;
  name: string;
  brand: string;
  image: string;
  description: string;
  marketStatus: "In Stock" | "Out of Stock" | "Coming Soon";
  releaseDate: Date;
  updatedOn: Date;
  isOfficial: boolean;
  price: number;
  previousPrice?: number;
  countInStock: number;
  rating?: number;
  numReviews?: number;
  isDeleted?: boolean;
  specifications?: {
    os?: string;
    storage?: string;
    ram?: string;
    mainCamera?: string;
    frontCamera?: string;
    display?: string;
    battery?: string;
    fingerprintSensor?: string;
    charging?: string;
    protection?: string;
    connectivity?: string;
    glassProtection?: string;
  };
};

export type TCartItem = {
  _id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};


export type TWishlistItem = {
  _id: string;
  name: string;
  image: string;
  price: number;
};

