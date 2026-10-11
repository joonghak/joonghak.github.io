// BASE_URL includes the repository prefix when deployed to GitHub project pages.
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export function sitePath(path = '') {
  return `${base}${path.replace(/^\/+/, '')}`;
}
