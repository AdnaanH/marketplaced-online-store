type CoverImage = {
    url: string
  };

type Slug = {
    _type: string
    current: string
  };

export type Category = {
    _id: string
    name: string
    slug: Slug
    coverImage: CoverImage;
    parentCategory: { name: string }
    products: [{title: string}]
}