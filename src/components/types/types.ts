export type Camper = {
  id?: string | undefined;
  name?: string;
  price?: number;
  rating?: number;
  location?: string;
  description?: string;
  form?: string;
  length?: string;
  width?: string;
  height?: string;
  tank?: string;
  consumption?: string;
  transmission?: string;
  engine?: string;
  AC?: boolean;
  bathroom?: boolean;
  kitchen?: boolean;
  TV?: boolean;
  radio?: boolean;
  refrigerator?: boolean;
  microwave?: boolean;
  gas?: boolean;
  water?: boolean;
  gallery?: GalleryItem[];
  reviews?: {
    reviewer_name?: string;
    reviewer_rating?: number;
    comment?: string;
  }[];
};

export type GalleryItem = {
  thumb?: string;
  original?: string;
};
