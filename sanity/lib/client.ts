import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: "v4he4yjk", // ID corretto dal tuo screenshot
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, 
})