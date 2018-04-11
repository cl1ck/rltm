import { parseToRgb, lighten, darken } from 'polished';

/**
 * Calculates the text color for a given background color
 * https://www.w3.org/TR/WCAG20/
 */
export const getTextColorForBackgroundColor = (backgroundColor) => {
  const { red, green, blue } = parseToRgb(backgroundColor);
  const colors = [red / 255, green / 255, blue / 255];
  const mappedColors = colors.map(c => (c < 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  const L = (0.2126 * mappedColors[0]) + (0.7152 * mappedColors[1]) + (0.0722 * mappedColors[2]);
  if (L > 0.179) {
    return '#000';
  }
  return '#fff';
};

const buildColorScheme = (colors, amount = 0.1) =>
  Object.keys(colors).reduce((acc, color) => {
    Object.assign(acc, {
      [color]: colors[color],
      [`${color}Light`]: lighten(amount, colors[color]),
      [`${color}Dark`]: darken(amount, colors[color]),
      [`${color}Text`]: getTextColorForBackgroundColor(colors[color]),
      [`${color}LightText`]: getTextColorForBackgroundColor(lighten(amount, colors[color])),
      [`${color}DarkText`]: getTextColorForBackgroundColor(darken(amount, colors[color])),
    });
    return acc;
  }, {});

export default buildColorScheme;
