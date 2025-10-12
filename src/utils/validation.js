export function validateProject(data) {
  const errors = {};
  
  if (!data.name?.trim()) {
    errors.name = 'Project name is required';
  } else if (data.name.trim().length < 2) {
    errors.name = 'Project name must be at least 2 characters';
  } else if (data.name.trim().length > 100) {
    errors.name = 'Project name must not exceed 100 characters';
  }
  
  if (!data.description?.trim()) {
    errors.description = 'Project description is required';
  } else if (data.description.trim().length < 10) {
    errors.description = 'Description must be at least 10 characters';
  } else if (data.description.trim().length > 500) {
    errors.description = 'Description must not exceed 500 characters';
  }
  
  if (!data.startDate) {
    errors.startDate = 'Start date is required';
  }
  
  if (data.endDate && data.startDate && new Date(data.endDate) < new Date(data.startDate)) {
    errors.endDate = 'End date must be after start date';
  }
  
  if (typeof data.progress === 'number') {
    if (data.progress < 0 || data.progress > 100) {
      errors.progress = 'Progress must be between 0 and 100';
    }
  }
  
  return errors;
}

export function validateRequired(text, fieldName = 'Поле') {
  const v = String(text ?? '').trim()
  return v ? null : `${fieldName} обязательно`
}
export function validateLen(text, max, fieldName = 'Поле') {
  if (!text) return null
  return String(text).length <= max ? null : `${fieldName}: максимум ${max} символов`
}
export function hasErrors(obj) {
  return Object.values(obj).some(Boolean)
}
