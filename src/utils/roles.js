export const ROLES = {
  ENGINEER: 'engineer',
  MANAGER: 'manager',
  DIRECTOR: 'director',
}

export const ROLE_PERMISSIONS = {
  [ROLES.ENGINEER]: {
    canViewAllProjects: false, 
    canCreateDefects: true,
    canEditOwnDefects: true,
    canEditOthers: false,
    canAssignTasks: false,
    canViewReports: false,
    canExportReports: false,
  },
  [ROLES.MANAGER]: {
    canViewAllProjects: true,
    canCreateDefects: false,    
    canEditOwnDefects: true,
    canEditOthers: true,        
    canAssignTasks: true,       
    canViewReports: true,
    canExportReports: true,
  },
  [ROLES.DIRECTOR]: {
    canViewAllProjects: true,
    canCreateDefects: false,
    canEditOwnDefects: false,
    canEditOthers: false,
    canAssignTasks: false,
    canViewReports: true,
    canExportReports: false,    
  },
}

export const ROLE_DESCRIPTIONS = {
  [ROLES.ENGINEER]: {
    title: 'Инженер',
    duties: [
      'Регистрирует дефекты в реальном времени.',
      'Обновляет статусы во время устранения.',
      'Добавляет комментарии и фото к дефектам.',
      'Ищет и фильтрует дефекты, назначенные ему.',
    ],
    restrictions: [
      'Доступ только к назначенным проектам.',
      'Не редактирует чужие дефекты.',
      'Нет доступа к отчётности.',
    ],
  },
  [ROLES.MANAGER]: {
    title: 'Менеджер',
    duties: [
      'Назначает исполнителей и сроки.',
      'Контролирует выполнение.',
      'Редактирует любые дефекты в своих проектах.',
      'Формирует/экспортирует отчёты, анализирует статистику.',
    ],
    restrictions: [
      'Не регистрирует новые дефекты.',
      'Отчёты только по своим проектам.',
    ],
  },
  [ROLES.DIRECTOR]: {
    title: 'Руководитель / Заказчик',
    duties: [
      'Просматривает отчёты и статистику.',
      'Запрашивает детали через комментарии.',
    ],
    restrictions: [
      'Только чтение: без создания/редактирования/назначений.',
      'Нет экспорта — только готовые отчёты.',
    ],
  },
}
