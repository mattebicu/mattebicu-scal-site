import { defineType, defineField } from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Pagine',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo Interno',
      type: 'string',
      description: 'Nome della pagina nel CMS (es: Chi Siamo)'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    }),
    defineField({
      name: 'contactTitle',
      title: 'Titolo Pagina Contatti',
      type: 'string',
      description: 'Il titolo grande che appare a sinistra (es: Chiedici di più sui nostri servizi)'
    }),
    defineField({
      name: 'poeticPhrase',
      title: 'Frase Poetica',
      type: 'text',
      description: 'La frase "Ogni granulo di plastica..."'
    }),
    // ... mantieni gli altri campi (tag, titleLine1, ecc.) se ti servono per le altre pagine
    defineField({
      name: 'tag',
      title: 'Tag Superiore',
      type: 'string',
    }),
    defineField({
      name: 'paragraph1',
      title: 'Paragrafo 1',
      type: 'text',
    }),
    defineField({
      name: 'mainImage',
      title: 'Immagine Principale',
      type: 'image',
    })
  ]
})