// const appName = 'sys';
// const isStandalone = (port) => String(port) === String(3000);

export const getPagePath = (path: string) => {
  // if (isStandalone(window.location.port)) {
  return path
  // }
  // return `/${appName}` + path;
}
export const getPageAdminPath = (path: string) => {
  // if (isStandalone(window.location.port)) {
  const appName = 'admin'
  return appName + path
  // }
  // return `/${appName}` + path;
}
