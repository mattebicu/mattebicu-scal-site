export const structure = (S: any) =>
  S.list()
    .title('Gestione Sito')
    .items([
      // 1. HOME PAGE (Per Logo e testi principali)
      S.listItem()
        .title('Home Page')
        .child(
          S.document()
            .schemaType('home')
            .documentId('home')
            .title('Configurazione Home e Logo')
        ),

      S.divider(),

      // 2. AUDIT
      S.documentTypeListItem('product').title('Pagina Audit (Servizi)'),
      
      S.divider(),

      // 3. CHI SIAMO
      S.listItem()
        .title('Chi Siamo')
        .child(
          S.document()
            .schemaType('page')
            .documentId('chi-siamo')
            .title('Contenuti Chi Siamo')
        ),

      S.divider(),

      // 4. CONTATTI
      S.listItem()
        .title('Contatti')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Info Contatto')
        ),
    ])