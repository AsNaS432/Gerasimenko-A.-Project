import { useAudit } from '../composables/useAudit'

export function exportAll() {
  const dump = JSON.stringify(localStorage, null, 2)
  const blob = new Blob([dump], { type: 'application/json;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a'); a.href = url; a.download = `backup-${new Date().toISOString().slice(0,19)}.json`; a.click()
  URL.revokeObjectURL(url)
  try { useAudit().log('backup:export', { size: dump.length }) } catch {}
}

export async function importAllFromFile(file) {
  const text = await file.text()
  const obj = JSON.parse(text)
  // осторожная заливка
  Object.keys(obj).forEach(k => {
    // можно ограничить список разрешённых ключей при желании
    localStorage.setItem(k, obj[k])
  })
  try { useAudit().log('backup:import', { keys: Object.keys(obj).length }) } catch {}
}
