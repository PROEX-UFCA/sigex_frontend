export const hashId = (id: string) =>
  id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
