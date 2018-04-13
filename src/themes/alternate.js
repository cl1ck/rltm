import buildColorScheme from 'tools/buildColorScheme';
import { colors } from 'themes/main';
import common from 'themes/common';
import extend from 'deep-extend';
import { complement } from 'polished';

const complementColors = Object.assign(...Object.entries(colors).map(([key, color]) => ({
  [key]: complement(color)
})));

const theme = {
  colors: buildColorScheme(complementColors),
};

export default extend(theme, common);
