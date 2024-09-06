import { Product } from "@/models/product"
import sanityClient from "./sanity"
import * as queries from "./sanity-utils" 
import { Category } from "@/models/category"

export async function getProducts() {
    const result = await sanityClient.fetch<Product[]>(
        queries.getProductsquery,
        {},
        { cache: 'no-cache' }
    )
    return result
  }

export async function getFeaturedProducts() {
    const result = await sanityClient.fetch<Product>(
      queries.getFeaturedProductQuery,
      {},
      { cache: 'no-cache' }
    );
  
    return result;
  }

  export async function getCategory() {
    const result = await sanityClient.fetch<Category[]>(
        queries.getCategoryquery,
        {},
        { cache: 'no-cache' }
    )
    return result
  }


export async function getCategoriesGroupedByParent() {
  const categories = await sanityClient.fetch<Category[]>(
    `*[_type == "category"]{
      _id,
      name,
      slug,
      "parentCategory": parentCategory->name
    }`,
    {},
    { cache: 'no-cache' }
  );

  console.log('Fetched Categories:', categories); // Add this line

  const groupedCategories = categories.reduce((acc, category) => {
    const parentCategoryName = category.parentCategory || 'Main Categories';
    if (!acc[parentCategoryName]) {
      acc[parentCategoryName] = [];
    }
    acc[parentCategoryName].push({
      value: category.slug.current,
      label: category.name,
    });
    return acc;
  }, {} as Record<string, { value: string; label: string }[]>);

  return Object.entries(groupedCategories).map(([label, items]) => ({
    label,
    items,
  }));
}


