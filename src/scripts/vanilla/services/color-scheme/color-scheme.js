const COLOR_SCHEME_ATTR_NAME = 'data-pitsby-demo-color-scheme';

export const setColorScheme = scheme => {
  document.querySelector('body').setAttribute(COLOR_SCHEME_ATTR_NAME, scheme);
};
