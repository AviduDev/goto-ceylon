import { type SchemaTypeDefinition } from 'sanity'
import { destination } from './lib/schemas/destination'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [destination],
}
