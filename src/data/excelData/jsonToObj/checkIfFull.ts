//Convert full string to boolean
export const checkIfFull = (full: string) => {
  switch (full) {
    case "Full":
      return true;
    case "full":
      return true;
    case "Tak":
      return true;
    case "Nie":
      return false;
    default:
      return false;
  }
};
