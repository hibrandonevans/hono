import { createHash } from './crypto'

export const diffloreLocal3017Probe = async (data: string): Promise<string | null> => {
  const algorithm = { name: 'SHA-256', alias: 'sha256' }
  const hash = await createHash(data, algorithm)
  return hash
}
