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
  examples: [
    {
      title: 'Sized Columns',
      description: 'Abstraction of a grid column to be used inside a row. Layout becomes single-column on mobile and offsets get removed.',
      template: `
      <div>
        <div class="pd-row">
          <div class="pd-col-12"><p>12 cols</p></div>
        </div>
        <div class="pd-row">
          <div class="pd-col-6"><p>6 cols</p></div>
          <div class="pd-col-6"><p>6 cols</p></div>
        </div>
        <div class="pd-row">
          <div class="pd-col-3"><p>3 cols</p></div>
          <div class="pd-col-3"><p>3 cols</p></div>
          <div class="pd-col-3"><p>3 cols</p></div>
          <div class="pd-col-3"><p>3 cols</p></div>
        </div>
        <div class="pd-row">
          <div class="pd-col-1"><p>1 col</p></div>
          <div class="pd-col-1"><p>1 col</p></div>
          <div class="pd-col-1"><p>1 col</p></div>
          <div class="pd-col-1"><p>1 col</p></div>
          <div class="pd-col-1"><p>1 col</p></div>
          <div class="pd-col-1"><p>1 col</p></div>
          <div class="pd-col-1"><p>1 col</p></div>
          <div class="pd-col-1"><p>1 col</p></div>
          <div class="pd-col-1"><p>1 col</p></div>
          <div class="pd-col-1"><p>1 col</p></div>
          <div class="pd-col-1"><p>1 col</p></div>
          <div class="pd-col-1"><p>1 col</p></div>
        </div>
      </div>`,
      styles
    },
    {
      title: 'Offset Columns',
      description: 'You can offset a column using offset css class from "pd-col-1" to "pd-col-11".',
      template:`
      <div>
        <div class="pd-row">
          <div class="pd-col-6 pd-col-offset-6"><p>6 cols</p></div>
        </div>
        <div class="pd-row">
          <div class="pd-col-6"><p>6 cols</p></div>
        </div>
        <div class="pd-row">
          <div class="pd-col-3 pd-col-offset-6"><p>3 cols</p></div>
          <div class="pd-col-1 pd-col-offset-2"><p>1 col</p></div>
        </div>
      </div>`,
      styles
    },
    {
      title: 'Nested Columns',
      template: `
      <div class="pd-row">
        <div class="pd-col-6"><p>6 cols</p></div>
        <div class="pd-col-6">
          <div class="pd-row">
            <div class="pd-col-8"><p>8 cols</p></div>
            <div class="pd-col-4"><p>4 cols</p></div>
          </div>
          <div class="pd-row">
            <div class="pd-col-4"><p>4 cols</p></div>
            <div class="pd-col-4"><p>4 cols</p></div>
            <div class="pd-col-4"><p>4 cols</p></div>
          </div>
        </div>
      </div>`,
      styles
    },
  ],
};
