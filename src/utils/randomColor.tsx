import { COLORS, Color } from "@constants/colors"


export const randomColor = (): Color => {
  const randomNumber = Math.floor(Math.random() * 3)
  return COLORS[randomNumber]
}