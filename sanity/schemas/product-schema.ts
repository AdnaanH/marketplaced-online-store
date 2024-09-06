import { defineField } from "sanity";

const product = {
    name: 'product',
    title: 'Products',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule =>
              Rule.required().min(10).error('Minimum 10 Characters'),
          }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
            },
            validation: Rule => Rule.required(),
          }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{ type: 'block' }],
            validation: Rule =>
              Rule.min(100).error('Minimum 200 Characters'),
          }),
        defineField({
            name: 'shortDescription',
            title: 'Short Description',
            type: 'text',
            validation: Rule =>
              Rule.min(100).error('Minimum 20 Characters'),
          }),
        defineField({
            name: 'metaTitle',
            title: 'Meta Title',
            type: 'text',
            validation: Rule =>
              Rule.max(100).error('Maximum 55 Characters'),
          }),
        defineField({
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            validation: Rule =>
              Rule.max(150).error('Maximum 150 Characters'),
          }),
        defineField({
            name: 'price',
            title: 'Price',
            type: 'number',
            initialValue: 0,
            validation: Rule => Rule.min(0),
          }),
        defineField({
            name: 'discount',
            title: 'Discount',
            type: 'number',
            initialValue: 0,
            validation: Rule => Rule.min(0),
          }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  { name: 'url', type: 'url', title: 'URL' },
                  { name: 'file', type: 'file', title: 'File' },
                ],
              },
            ],
            validation: Rule =>
              Rule.min(2).error('Minimum of 2 images required'),
          }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'object',
            fields: [
              { name: 'url', type: 'url', title: 'URL' },
              { name: 'file', type: 'file', title: 'File' },
            ],
            validation: Rule => Rule.error('Cover Image is required'),
          }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }],
          }),
        defineField({
            name: 'productVariations',
            title: 'Product Variations',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  { name: 'variationType', title: 'Variation Type', type: 'string' }, 
                  { name: 'url', type: 'url', title: 'URL' },
                  { name: 'file', type: 'file', title: 'File' },
                ],
              },
            ],
          }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  { name: 'productTags', title: 'Product Tags', type: 'string' }, 
                ],
              },
            ],
          }),
        defineField({
            name: 'isFeatured',
            title: 'Is Featured',
            type: 'boolean',
            initialValue: false,
            }),
        defineField({
            name: 'reviews',
            title: 'Reviews',
            type: 'array',
            of: [{ type: 'review' }],
            }),
    ]
};

export default product;
