import { sha256Hex } from './crypto'

const DEFAULT_USERS = [
  { id: 'u-1', name: 'Иван Инженер',   email: 'eng@example.com',   role: 'engineer', password: 'eng123' },
  { id: 'u-2', name: 'Мария Менеджер', email: 'mgr@example.com',   role: 'manager',  password: 'mgr123' },
  { id: 'u-3', name: 'Олег Заказчик',  email: 'dir@example.com',   role: 'director', password: 'dir123' },
]

const LS_KEY = 'auth_users'

export async function seedUsersIfNeeded() {
  const existing = localStorage.getItem(LS_KEY)
  if (existing) return JSON.parse(existing)

  const users = []
  for (const u of DEFAULT_USERS) {
    users.push({
      id: u.id,
      name: u.name,
      email: u.email.toLowerCase(),
      role: u.role,
      passwordHash: await sha256Hex(u.password),
    })
  }
  localStorage.setItem(LS_KEY, JSON.stringify(users))
  return users
}

export function getStoredUsers() {
  try { return JSON.parse(localStorage.getItem(LS_KEY) || '[]') } catch { return [] }
}
