// Inject storage into helpers so they can be tested without a browser.
export const STORAGE_KEY = 'studytask.tasks.v1';

export function saveTasks(tasks, storage) {
  // TODO: persist tasks; report failure instead of claiming success.
  throw new Error('TODO: implement saveTasks');
}

export function loadTasks(storage) {
  // TODO: parse and validate stored shape; distinguish empty and corrupt data.
  throw new Error('TODO: implement loadTasks');
}
