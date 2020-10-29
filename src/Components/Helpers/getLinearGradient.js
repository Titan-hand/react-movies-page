import getColorsBanner from "./getColors";
import RGBA from "./rgba";

export default function (genrer, config = { opacity1: 70, opacity2: 50 }) {
  const { color1, color2 } = getColorsBanner(genrer);
  return `linear-gradient(to right, ${RGBA(color1, config.opacity1)}, ${RGBA(
    color2,
    config.opacity2
  )})`;
}
