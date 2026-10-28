// Proposed API: architect may revise before implementation.
// Pure task logic: no DOM and no localStorage in this module.
export const MAX_TITLE_LENGTH = 100;

export function validateTitle(title) {
  // TODO: return { valid, title: trimmedTitle, error }.
  throw new Error('TODO: implement validateTitle');
}

export function createTask(title, id) {
  // TODO: validate title; return { id, title, completed: false }.
  throw new Error('TODO: implement createTask');
}

export function toggleTask(tasks, id) {
  // TODO: return updated tasks, changing only the matching id.
  throw new Error('TODO: implement toggleTask');
}
