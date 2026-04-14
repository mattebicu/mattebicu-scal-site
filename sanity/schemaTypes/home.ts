import { defineType, defineField } from 'sanity'

export const home = defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    // SEZIONE HERO
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'tag', title: 'Tag (piccolo sopra titolo)', type: 'string' }),
        defineField({ name: 'titleLine1', title: 'Titolo Riga 1', type: 'string' }),
        defineField({ name: 'titleLine2', title: 'Titolo Riga 2', type: 'string' }),
        defineField({ name: 'titleLine3', title: 'Titolo Riga 3 (Corsivo Rosso)', type: 'string' }),
        defineField({ name: 'titleLine4', title: 'Titolo Riga 4', type: 'string' }),
        defineField({ name: 'description', title: 'Descrizione Desktop', type: 'text' }),
        defineField({ 
          name: 'descriptionMobile', 
          title: 'Descrizione Mobile (Breve)', 
          type: 'string',
          description: 'Testo che apparirà solo su smartphone (max 2 righe)' 
        }),
        defineField({ name: 'ctaPrimary', title: 'Testo Bottone', type: 'string' }),
        defineField({
          name: 'slideshow',
          title: 'Slideshow Immagini',
          type: 'array',
          of: [{ type: 'image', options: { hotspot: true } }]
        }),
      ]
    }),

    // SEZIONE SOTTO COPERTINA
    defineField({
      name: 'sottoCopertina',
      title: 'Blocco Sotto Copertina',
      type: 'object',
      fields: [
        defineField({ name: 'testo', title: 'Testo Descrittivo', type: 'text' })
      ]
    }),

    // IMPOSTAZIONI SITO
    defineField({
      name: 'site',
      title: 'Impostazioni Sito',
      type: 'object',
      fields: [
        defineField({ name: 'name', title: 'Nome Sito', type: 'string' }),
        defineField({ name: 'logo', title: 'Logo', type: 'image' })
      ]
    })
  ],
  // ECCO LA MAGIA
  preview: {
    prepare() {
      return {
        title: 'Impostazioni Home Page',
        subtitle: 'Modifica i testi e le immagini della Home'
      }
    }
  }
})
