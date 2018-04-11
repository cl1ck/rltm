import { getTextColorForBackgroundColor } from './buildColorScheme';

describe('getTextColorForBackgroundColor', () => {
  it('returns black for light colors', () => {
    expect(getTextColorForBackgroundColor('#fff')).toBe('#000');
    expect(getTextColorForBackgroundColor('#f962ff')).toBe('#000');
    expect(getTextColorForBackgroundColor('rgb(120, 164, 229)')).toBe('#000');
  });
  it('returns white for dark colors', () => {
    expect(getTextColorForBackgroundColor('#000')).toBe('#fff');
    expect(getTextColorForBackgroundColor('#2962ff')).toBe('#fff');
    expect(getTextColorForBackgroundColor('rgb(55, 103, 115)')).toBe('#fff');
  });
});
