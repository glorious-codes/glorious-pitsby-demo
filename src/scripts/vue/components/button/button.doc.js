module.exports = {
  name: 'Button',
  description: 'Abstraction of a native button.',
  properties: [
    {
      name: 'type',
      type: 'String',
      values: 'submit, reset'
    },
    {
      name: 'theme',
      type: 'String',
      values: 'primary, secondary'
    },
    {
      name: 'block',
      type: 'Boolean',
      values: 'true/false'
    },
    {
      name: 'disabled',
      type: 'Boolean',
      values: 'true/false'
    },
    {
      name: 'on-click',
      type: '<void> Function',
      values: 'any'
    }
  ],
  examples: [
    {
      title: 'Default Button',
      template: `
      <pd-button>
        Default Button
      </pd-button>`
    },
    {
      title: 'Theme Button',
      template: `
      <pd-row>
        <pd-col size="3">
          <pd-button theme="primary">
            Primary Button
          </pd-button>
        </pd-col>
        <pd-col size="3">
          <pd-button theme="secondary">
            Secondary Button
          </pd-button>
        </pd-col>
      </pd-row>`
    },
    {
      title: 'Disabled Button',
      template: `
      <pd-row>
        <pd-col size="3">
          <pd-button disabled>
            Default Button
          </pd-button>
        </pd-col>
        <pd-col size="3">
          <pd-button theme="primary" disabled>
            Primary Button
          </pd-button>
        </pd-col>
        <pd-col size="3">
          <pd-button theme="secondary" disabled>
            Secondary Button
          </pd-button>
        </pd-col>
      </pd-row>`
    },
    {
      title: 'Block Button',
      template: `
      <pd-button block>
        Block Button
      </pd-button>`
    },
    {
      title: 'Button with click listener',
      controller: {
        data(){
          return {
            counter: 0
          };
        },
        methods: {
          onClick(){
            this.setCounter(this.counter + 1);
          },
          setCounter(counter){
            this.counter = counter;
          }
        },
        computed: {
          counterSuffix(){
            return this.counter > 1 ? 'times' : 'time';
          }
        }
      },
      template: `
      <div>
        <pd-row>
          <pd-col size="12">
            <pd-button theme="primary" :on-click="onClick">
              Primary Button
            </pd-button>
          </pd-col>
        </pd-row>
        <pd-row>
          <pd-col size="12" v-if="counter">
            Button clicked {{ counter }} {{ counterSuffix }}.
          </pd-col>
        </pd-row>
      </div>`
    }
  ]
};
