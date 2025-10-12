export function sanitizeText(str) {
  if (typeof str !== 'string') return ''
  return str
    .replace(/[<>]/g, '')            
    .replace(/javascript:/gi, '')    
    .replace(/on\w+=/gi, '')         
    .trim()
}

export function clampLength(str, max = 500) {
  const s = String(str ?? '')
  return s.length > max ? s.slice(0, max) : s
}
