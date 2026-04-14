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
      title: 'Ufficio Tecnico (Telefono)',
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
      description: 'Inserire la partita IVA (es. IT01234567890)'
    },
    {
      name: 'legalInfo',
      title: 'Note Legali (REA, Capitale Sociale, ecc.)',
      type: 'text',
      description: 'Dati obbligatori: Numero REA, Capitale Sociale versato, Ufficio Registro Imprese'
    },
  ],
}