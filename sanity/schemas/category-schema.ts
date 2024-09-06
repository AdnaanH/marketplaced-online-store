import { defineField } from "sanity";

const category = {
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: Rule => 
                Rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
              source: 'name',
            },
            validation: Rule => Rule.required(),
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
            name: 'parentCategory',
            title: 'Parent Category',
            type: 'reference',
            to: [{ type: 'category' }],
            description: 'Select a parent category if this is a subcategory',
        }),
        defineField({
            name: 'products',
            title: 'Products',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'product' }] }],
        }),
    ]
};

export default category;
