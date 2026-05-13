export const siteSettings = { 
  name: 'siteSettings',
  title: 'Info Contatto e Legali',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email Advisory',
      type: 'string',
      validation: (Rule: any) => Rule.email()
    },
    {
      name: 'phone',
      title: 'Ufficio Tecnico (Telefono 1)',
      type: 'string',
    },
    {
      name: 'phone2',
      title: 'Ufficio Tecnico (Telefono 2)',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Sede Legale (Indirizzo)',
      type: 'string',
    },
    {
      name: 'vatNumber',
      title: 'Partita IVA',
      type: 'string',
    },
    {
      name: 'legalInfo',
      title: 'Note Legali',
      type: 'text',
    },
  ],
}