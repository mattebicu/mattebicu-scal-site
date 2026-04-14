import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk' 
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemaTypes'
import { structure } from './sanity/structure' 

export default defineConfig({
  name: 'default',
  title: 'scal-plastica',
  projectId: 'v4he4yjk',
  dataset: 'production',

  // QUESTA è la riga che mancava per farlo funzionare su /studio
  basePath: '/studio',

  plugins: [
    deskTool({ 
      structure: structure 
    }), 
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})