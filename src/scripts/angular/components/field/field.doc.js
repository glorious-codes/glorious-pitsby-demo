module.exports = {
  name: 'Field',
  description: 'Container for form controls like input, select etc.',
  properties: [
    {
      name: 'data-label',
      type: 'String',
      values: 'any',
      required: true
    }
  ],
  examples: [
    {
      title: 'Default Field',
      template: `
      <pd-row>
        <pd-col data-size="4">
          <pd-field data-label="Email Address">
            <pd-input data-type="email" data-name="email" />
          </pd-field>
        </pd-col>
      </pd-row>`
    },
    {
      title: 'Field with Required Input',
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
      },
      template: `
      <form ng-submit="$ctrl.onSubmit()">
        <pd-row>
          <pd-col data-size="4">
            <pd-field data-label="Email Address">
              <pd-input
                data-type="email"
                data-name="example"
                data-value="$ctrl.value"
                data-required="true" />
            </pd-field>
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
    }
  ]
};
