'use client'

/**
 * Questo file renderizza lo studio di Sanity all'interno del tuo sito Next.js
 * L'indirizzo sarà: tuosito.com/studio
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export default function StudioPage() {
  return <NextStudio config={config} />
}