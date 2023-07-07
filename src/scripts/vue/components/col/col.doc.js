const styles = `
[class*=col] p {
  padding: 0 10px;
  background-color: var(--color-blue-lighter);
  color: var(--color-blue);
  text-align: center;
  line-height: 40px;
  white-space: nowrap;
  overflow: hidden;
  border-radius: 3px;
  box-sizing: border-box;
}`;

module.exports = {
  name: 'Column',
  description: 'Abstraction of a grid column to be used inside a row. Layout becomes single-column on mobile and offsets get removed.',
  properties: [
    {
      name: 'size',
      type: 'String/Number',
      values: '1 to 12',
      required: true
    },
    {
      name: 'offset',
      type: 'String/Number',
      values: '1 to 11'
    }
  ],
  examples: [
    {
      title: 'Sized Columns',
      template: `
      <div>
        <pd-row>
          <pd-col size="12"><p>12 cols</p></pd-col>
        </pd-row>
        <pd-row>
          <pd-col size="6"><p>6 cols</p></pd-col>
          <pd-col size="6"><p>6 cols</p></pd-col>
        </pd-row>
        <pd-row>
          <pd-col size="3"><p>3 cols</p></pd-col>
          <pd-col size="3"><p>3 cols</p></pd-col>
          <pd-col size="3"><p>3 cols</p></pd-col>
          <pd-col size="3"><p>3 cols</p></pd-col>
        </pd-row>
        <pd-row>
          <pd-col size="1"><p>1 col</p></pd-col>
          <pd-col size="1"><p>1 col</p></pd-col>
          <pd-col size="1"><p>1 col</p></pd-col>
          <pd-col size="1"><p>1 col</p></pd-col>
          <pd-col size="1"><p>1 col</p></pd-col>
          <pd-col size="1"><p>1 col</p></pd-col>
          <pd-col size="1"><p>1 col</p></pd-col>
          <pd-col size="1"><p>1 col</p></pd-col>
          <pd-col size="1"><p>1 col</p></pd-col>
          <pd-col size="1"><p>1 col</p></pd-col>
          <pd-col size="1"><p>1 col</p></pd-col>
          <pd-col size="1"><p>1 col</p></pd-col>
        </pd-row>
      </div>
      `,
      styles
    },
    {
      title: 'Offset Columns',
      template:`
      <div>
        <pd-row>
          <pd-col size="6" offset="6"><p>6 cols</p></pd-col>
        </pd-row>
        <pd-row>
          <pd-col size="6"><p>6 cols</p></pd-col>
        </pd-row>
        <pd-row>
          <pd-col size="3" offset="6"><p>3 cols</p></pd-col>
          <pd-col size="1" offset="2"><p>1 col</p></pd-col>
        </pd-row>
      </div>
      `,
      styles
    },
    {
      title: 'Nested Columns',
      template: `
      <pd-row>
        <pd-col size="6"><p>6 cols</p></pd-col>
        <pd-col size="6">
          <pd-row>
            <pd-col size="8"><p>8 cols</p></pd-col>
            <pd-col size="4"><p>4 cols</p></pd-col>
          </pd-row>
          <pd-row>
            <pd-col size="4"><p>4 cols</p></pd-col>
            <pd-col size="4"><p>4 cols</p></pd-col>
            <pd-col size="4"><p>4 cols</p></pd-col>
          </pd-row>
        </pd-col>
      </pd-row>
      `,
      styles
    },
  ],
};
