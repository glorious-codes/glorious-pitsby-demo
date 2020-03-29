const styles = `
[class*=col] p {
  padding: 0 10px;
  background-color: #E5EFFF;
  color: #3282E1;
  text-align: center;
  line-height: 40px;
  white-space: nowrap;
  overflow: hidden;
  border-radius: 3px;
  box-sizing: border-box;
}`;

module.exports = {
  name: 'Column',
  description: 'Abstraction of a grid column to be used inside a row.',
  properties: [
    {
      name: 'data-size',
      type: 'String',
      values: '1 to 12',
      required: true
    },
    {
      name: 'data-offset',
      type: 'String',
      values: '1 to 11'
    }
  ],
  examples: [
    {
      title: 'Sized Columns',
      template: `
      <div>
        <pd-row>
          <pd-col data-size="12"><p>12 cols</p></pd-col>
        </pd-row>
        <pd-row>
          <pd-col data-size="6"><p>6 cols</p></pd-col>
          <pd-col data-size="6"><p>6 cols</p></pd-col>
        </pd-row>
        <pd-row>
          <pd-col data-size="3"><p>3 cols</p></pd-col>
          <pd-col data-size="3"><p>3 cols</p></pd-col>
          <pd-col data-size="3"><p>3 cols</p></pd-col>
          <pd-col data-size="3"><p>3 cols</p></pd-col>
        </pd-row>
        <pd-row>
          <pd-col data-size="1"><p>1 col</p></pd-col>
          <pd-col data-size="1"><p>1 col</p></pd-col>
          <pd-col data-size="1"><p>1 col</p></pd-col>
          <pd-col data-size="1"><p>1 col</p></pd-col>
          <pd-col data-size="1"><p>1 col</p></pd-col>
          <pd-col data-size="1"><p>1 col</p></pd-col>
          <pd-col data-size="1"><p>1 col</p></pd-col>
          <pd-col data-size="1"><p>1 col</p></pd-col>
          <pd-col data-size="1"><p>1 col</p></pd-col>
          <pd-col data-size="1"><p>1 col</p></pd-col>
          <pd-col data-size="1"><p>1 col</p></pd-col>
          <pd-col data-size="1"><p>1 col</p></pd-col>
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
          <pd-col data-size="6" data-offset="6"><p>6 cols</p></pd-col>
        </pd-row>
        <pd-row>
          <pd-col data-size="6"><p>6 cols</p></pd-col>
        </pd-row>
        <pd-row>
          <pd-col data-size="3" data-offset="6"><p>3 cols</p></pd-col>
          <pd-col data-size="1" data-offset="2"><p>1 col</p></pd-col>
        </pd-row>
      </div>
      `,
      styles
    },
    {
      title: 'Nested Columns',
      template: `
      <pd-row>
        <pd-col data-size="6"><p>6 cols</p></pd-col>
        <pd-col data-size="6">
          <pd-row>
            <pd-col data-size="8"><p>8 cols</p></pd-col>
            <pd-col data-size="4"><p>4 cols</p></pd-col>
          </pd-row>
          <pd-row>
            <pd-col data-size="4"><p>4 cols</p></pd-col>
            <pd-col data-size="4"><p>4 cols</p></pd-col>
            <pd-col data-size="4"><p>4 cols</p></pd-col>
          </pd-row>
        </pd-col>
      </pd-row>
      `,
      styles
    },
  ],
};
