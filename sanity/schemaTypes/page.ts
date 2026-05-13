// sanity/schemaTypes/page.ts

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
      name: 'tag',
      title: 'Tag Superiore',
      type: 'string',
      description: 'Il testo piccolo sopra il titolo (es: Expertise Tecnica)'
    }),
    defineField({
      name: 'titleLine1',
      title: 'Titolo Riga 1',
      type: 'string',
      description: 'La prima riga del titolo grande'
    }),
    defineField({
      name: 'titleHighlight',
      title: 'Titolo Evidenziato (Rosso)',
      type: 'string',
      description: 'La parola che apparirà in rosso e corsivo'
    }),
    defineField({
      name: 'titleLine2',
      title: 'Titolo Riga 2 (Finale)',
      type: 'string',
      description: 'L\'ultima parte del titolo grande'
    }),
    defineField({
      name: 'paragraph1',
      title: 'Paragrafo 1 (In evidenza)',
      type: 'text',
      description: 'Il testo in grassetto/corsivo con la riga rossa di lato'
    }),
    defineField({
      name: 'paragraph2',
      title: 'Paragrafo 2',
      type: 'text',
      description: 'Il testo descrittivo standard'
    }),
    defineField({
      name: 'mainImage',
      title: 'Immagine Principale',
      type: 'image',
      options: { hotspot: true },
      description: 'L\'immagine che appare a sinistra dei testi'
    }),
    defineField({
      name: 'brochure',
      title: 'Brochure PDF',
      type: 'file',
      options: {
        accept: 'application/pdf'
      },
      description: 'Carica qui il PDF. Se lo carichi, apparirà in automatico il bottone "Scarica Brochure".'
    }),
    defineField({
      name: 'contactTitle',
      title: 'Titolo Pagina Contatti',
      type: 'string',
      description: 'Il titolo che appare a sinistra del form (solo per la pagina contatti)'
    }),
    defineField({
      name: 'poeticPhrase',
      title: 'Frase Poetica',
      type: 'text',
      description: 'Frase in evidenza nella pagina contatti (es: Ogni granulo di plastica...)'
    })
  ]
})