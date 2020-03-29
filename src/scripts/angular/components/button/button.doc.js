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
      values: 'primary'
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
      <pd-button data-theme="primary">
        Primary Button
      </pd-button>`
    },
    {
      title: 'Block Button',
      template: `
      <pd-button data-block="true">
        Block Button
      </pd-button>`
    },
    {
      title: 'Disabled Button',
      template: `
      <pd-button theme="primary" data-disabled="true">
        Disabled Button
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

        $ctrl.$onInit();
      },
      template: `
      <div>
        <div>
          <pd-button theme="primary" on-click="$ctrl.onClick">
            Primary Button
          </pd-button>
        </div>
        <div ng-if="$ctrl.counter">
          Button clicked {{ $ctrl.counter }} {{ $ctrl.counterSuffix }}.
        </div>
      </div>`
    }
  ]
};
