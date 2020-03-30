module.exports = {
  name: 'Textarea',
  description: 'Abstraction of a native textarea.',
  properties: [
    {
      name: 'data-name',
      type: 'String',
      values: 'any',
      required: true
    },
    {
      name: 'data-required',
      type: 'Boolean',
      values: 'true/false'
    },
    {
      name: 'data-disabled',
      type: 'Boolean',
      values: 'true/false'
    },
    {
      name: 'on-change',
      type: '<void> Function',
      values: 'any'
    }
  ],
  examples: [
    {
      title: 'Default Textarea',
      controller: function(){
        const $ctrl = this;
        $ctrl.value = '';
      },
      template: `
      <div>
        <pd-row>
          <pd-col data-size="3">
            <pd-textarea data-name="example" data-value="$ctrl.value" />
          </pd-col>
        </pd-row>
        <pd-row>
          <pd-col data-size="12">
            Value: {{ $ctrl.value }}
          </pd-col>
        </pd-row>
      </div>`
    },
    {
      title: 'Textarea with Initial Value',
      controller: function(){
        const $ctrl = this;
        $ctrl.value = 'Pitsby';
      },
      template: `
      <div>
        <pd-row>
          <pd-col data-size="3">
            <pd-textarea data-name="example" data-value="$ctrl.value" />
          </pd-col>
        </pd-row>
        <pd-row>
          <pd-col data-size="12">
            Value: {{ $ctrl.value }}
          </pd-col>
        </pd-row>
      </div>`
    },
    {
      title: 'Required Textarea',
      controller: function(){
        const $ctrl = this;

        $ctrl.$onInit = () => {
          setValue('');
        };

        $ctrl.onSubmit = () => {
          setValue('');
        }

        function setValue(value){
          $ctrl.value = value;
        }

        $ctrl.$onInit();
      },
      template: `
      <form ng-submit="$ctrl.onSubmit()">
        <pd-row>
          <pd-col data-size="3">
            <pd-textarea
              data-name="example"
              data-value="$ctrl.value"
              data-required="true" />
          </pd-col>
        </pd-row>
        <pd-row>
          <pd-col data-size="3">
            <pd-button data-type="submit" data-theme="primary">
              Submit
            </pd-button>
          </pd-col>
        </pd-row>
      </form>`
    },
    {
      title: 'Disabled Textarea',
      controller: function(){
        const $ctrl = this;
        $ctrl.value = '';
      },
      template: `
      <pd-row>
        <pd-col data-size="3">
          <pd-textarea
            data-name="example"
            data-value="value"
            data-disabled="true" />
        </pd-col>
      </pd-row>`
    },
    {
      title: 'Textarea with Change listener',
      controller: function(){
        const $ctrl = this;

        $ctrl.$onInit = () => {
          setValue('');
        };

        $ctrl.onChange = data => {
          setLastChange(JSON.stringify(data));
        };

        function setValue(value){
          $ctrl.value = value;
        }

        function setLastChange(lastChange){
          $ctrl.lastChange = lastChange;
        }

        $ctrl.$onInit();
      },
      template: `
      <div>
        <pd-row>
          <pd-col data-size="3">
            <pd-textarea
              data-name="example"
              data-value="$ctrl.value"
              on-change="$ctrl.onChange" />
          </pd-col>
        </pd-row>
        <pd-row>
          <pd-col data-size="12">
            Last Change: {{ $ctrl.lastChange }}
          </pd-col>
        </pd-row>
      </div>`
    }
  ]
};
