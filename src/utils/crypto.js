export async function sha256Hex(text) {
  const enc = new TextEncoder().encode(String(text ?? ''))
  const buf = await crypto.subtle.digest('SHA-256', enc)
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('')
}
