import { groq } from "next-sanity"

export const getProductsquery = groq`*[_type == "product"]{
    _id,
    _createdAt,
    title,
    slug,
    url,
    description,
    shortDescription,
    metaTitle,
    metaDescription,
    price,
    discount,
    category,
    productVariations,
    tags,
    isFeatured,
    coverImage,
    reviews
}`;

export const getFeaturedProductQuery = groq`*[_type == "hotelRoom" && isFeatured == true][3] {
    _id,
    shortDescription,
    discount,
    images,
    isFeatured,
    title,
    reviews,
    price,
    slug,
    coverImage
}`;
export const getCategoryquery = groq`*[_type == "category"]{
    _id,
    _createdAt,
    name,
    slug,
    coverImage,
    parentCategory,
    products
}`;

