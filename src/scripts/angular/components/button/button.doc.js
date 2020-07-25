module.exports = {
  name: 'Button',
  description: 'Abstraction of a native button.',
  properties: [
    {
      name: 'data-type',
      type: 'String',
      values: 'submit, reset'
    },
    {
      name: 'data-theme',
      type: 'String',
      values: 'primary, secondary'
    },
    {
      name: 'data-block',
      type: 'Boolean',
      values: 'true/false'
    },
    {
      name: 'data-disabled',
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
          <pd-button data-theme="primary">
            Primary Button
          </pd-button>
        </pd-col>
        <pd-col size="3">
          <pd-button data-theme="secondary">
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
          <pd-button disabled="true">
            Default Button
          </pd-button>
        </pd-col>
        <pd-col size="3">
          <pd-button data-theme="primary" disabled="true">
            Primary Button
          </pd-button>
        </pd-col>
        <pd-col size="3">
          <pd-button data-theme="secondary" disabled="true">
            Secondary Button
          </pd-button>
        </pd-col>
      </pd-row>`
    },
    {
      title: 'Block Button',
      template: `
      <pd-button data-block="true">
        Block Button
      </pd-button>`
    },
    {
      title: 'Button with click listener',
      controller: function(){
        const $ctrl = this;

        $ctrl.$onInit = () => {
          setCounter(0);
        };

        $ctrl.onClick = () => {
          setCounter($ctrl.counter + 1);
          setCounterSuffix(buildCounterSuffix($ctrl.counter));
        };

        function setCounter(counter){
          $ctrl.counter = counter;
        }

        function buildCounterSuffix(counter){
          return counter > 1 ? 'times' : 'time';
        }

        function setCounterSuffix(counterSuffix){
          $ctrl.counterSuffix = counterSuffix
        }
      },
      template: `
      <div>
        <pd-row>
          <pd-col size="12">
            <pd-button theme="primary" on-click="$ctrl.onClick">
              Primary Button
            </pd-button>
          </pd-col>
        </pd-row>
        <pd-row ng-if="$ctrl.counter">
          <pd-col size="12">
            Button clicked {{ $ctrl.counter }} {{ $ctrl.counterSuffix }}.
          </pd-col>
        </pd-row>
      </div>`
    }
  ]
};
