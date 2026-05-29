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
    defineField({
      name: 'titleLine1',
      title: 'Titolo Riga 1',
      type: 'string',
    }),
    defineField({
      name: 'titleLine2',
      title: 'Titolo Riga 2',
      type: 'string',
    }),
    defineField({
      name: 'titleHighlight',
      title: 'Titolo Evidenziato',
      type: 'string',
    }),
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
    }),
    defineField({
      name: 'brochure',
      title: 'Brochure PDF',
      type: 'file',
      description: 'Carica qui il file della brochure da far scaricare',
      options: {
        accept: '.pdf'
      }
    })
  ]
})