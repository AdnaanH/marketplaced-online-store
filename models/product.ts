type CoverImage = {
    url: string;
  };
  
  export type Image = {
    _key: string;
    url: string;
  };
  
  type Variation = {
    _key: string;
    variationType: string;
    url: string;
  };

  type Tag = {
    _key: string;
    productTag: string;
  };
  
  type Slug = {
    _type: string;
    current: string;
  };
  
  export type Product = {
    _id: string;
    title: string;
    slug: Slug;
    description: string;
    shortDescription: string;
    metaTitle: string;
    metaDescription: string;
    price: number;
    discount: number;
    images: Image[];
    coverImage: CoverImage;
    category: string;
    productVariations: Variation[];
    tags: Tag;
    isFeatured: boolean;
  };
  
 