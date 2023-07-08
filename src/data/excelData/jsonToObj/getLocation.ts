//Convert place string to place name
export const getLocation = (location: string) => {
  switch (location) {
    case "K":
      return "Krasnystaw";
    case "k":
      return "Krasnystaw";
    case "W":
      return "Wólka";
    case "w":
      return "Wólka";
    case "L":
      return "Lublin";
    case "l":
      return "Lublin";
    case "Lublin":
      return "Lublin";
    case "lublin":
      return "Lublin";
    default:
      return "Unknown";
  }
};
