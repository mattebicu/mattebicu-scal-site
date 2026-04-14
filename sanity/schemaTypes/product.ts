import { defineField, defineType } from 'sanity';

export const product = defineType({
  name: 'product',
  title: 'Prodotti',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome Prodotto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Immagine',
      type: 'image',
      options: { hotspot: true },
    }),
    // Questo campo è fondamentale per la descrizione che appare nella pagina Audit
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
    }),
  ],
});