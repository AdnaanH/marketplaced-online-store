import { defineField } from 'sanity';

const review = {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    defineField({
      name: 'product',
      title: 'Product Title',
      type: 'reference',
      to: [{ type: 'product' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Review Text',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'userRating',
      title: 'User Rating',
      type: 'number',
      validation: Rule =>
        Rule.required().min(1).max(5).error('Rating must be between 1 and 5'),
    }),
  ],
};

export default review;