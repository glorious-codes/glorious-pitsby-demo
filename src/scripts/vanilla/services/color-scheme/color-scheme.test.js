import { setColorScheme } from './color-scheme.js';

describe('Color Scheme Service', () => {
  function getColorSchemeAttrName(){
    return 'data-pitsby-demo-color-scheme';
  }

  it('should set color scheme', () => {
    const htmlBody = document.querySelector('body');
    expect(htmlBody.getAttribute(getColorSchemeAttrName())).toEqual(null);
    setColorScheme('dark');
    expect(htmlBody.getAttribute(getColorSchemeAttrName())).toEqual( 'dark');
    setColorScheme('light');
    expect(htmlBody.getAttribute(getColorSchemeAttrName())).toEqual('light');
  });
});
