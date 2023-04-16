export function setPathsStorage(path) {
  // console.log("setting");
  const itemName = "documentsPaths";

  if (!sessionStorage.getItem(itemName)) {
    sessionStorage.setItem(itemName, []);
  }

  const pathsArray = getPathsArray();

  if (pathsArray.includes(path)) {
    return;
  }

  pathsArray.push(path);

  sessionStorage.setItem(itemName, pathsArray);
}

export function getPathsArray() {
  const itemName = "documentsPaths";

  const pathsArray = sessionStorage.getItem(itemName)?.split(",");

  if (!pathsArray) {
    return;
  }

  if (pathsArray.at(0) === "" && pathsArray.length === 1) {
    return [];
  }

  return pathsArray;
}

export function transformPath(path, basePath) {
  const shortPath = path.split("/").slice(2).join("/");

  let slash = "/";
  !shortPath && (slash = "");

  const resultingPath = basePath + slash + shortPath;

  return resultingPath;
}
