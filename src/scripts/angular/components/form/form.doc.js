const styles = '[data-form-container] { margin: 0 auto; max-width: 320px; }';

module.exports = {
  name: 'Form',
  description: 'Abstraction of a native form.',
  properties: [
    {
      name: 'on-submit',
      type: '<Promise> Function',
      values: 'any',
      required: true
    },
    {
      name: 'on-submit-success',
      type: '<void> Function',
      values: 'any'
    },
    {
      name: 'on-submit-error',
      type: '<void> Function',
      values: 'any'
    },
    {
      name: 'data-success-message',
      type: 'String',
      values: 'any'
    },
    {
      name: 'data-error-message',
      type: 'String',
      values: 'any'
    }
  ],
  examples: [
    {
      title: 'Successful Form with Custom Success Message',
      controller: function($timeout){
        const $ctrl = this;

        $ctrl.$onInit = () => {
          setData({});
        };

        $ctrl.onSubmit = () => {
          // Fake request simulation
          return new Promise((resolve) => {
            const response = { status: 200, message: 'ok' };
            $timeout(() => resolve(response), 3000);
          });
        }

        $ctrl.onSubmitSuccess = response => {
          // Here's where you handle server response
          console.log(response);
          setData({});
        };

        function setData(data){
          $ctrl.data = data;
        }

        $ctrl.$onInit();
      },
      template: `
      <div data-form-container>
        <pd-form
          on-submit="$ctrl.onSubmit"
          on-submit-success="$ctrl.onSubmitSuccess"
          data-success-message="Success! Your message has been sent.">
          <pd-row>
            <pd-col data-size="12">
              <pd-field data-label="Name">
                <pd-input
                  data-name="name"
                  data-value="$ctrl.data.name"
                  data-required="true" />
              </pd-field>
            </pd-col>
          </pd-row>
          <pd-row>
            <pd-col data-size="12">
              <pd-field data-label="Email">
                <pd-input
                  data-type="email"
                  data-name="email"
                  data-value="$ctrl.data.email"
                  data-required="true" />
              </pd-field>
            </pd-col>
          </pd-row>
          <pd-row>
            <pd-col data-size="12">
              <pd-field data-label="Message">
                <pd-textarea
                  data-name="message"
                  data-value="$ctrl.data.message"
                  data-required="true" />
              </pd-field>
            </pd-col>
          </pd-row>
          <pd-row>
            <pd-col data-size="6">
              <pd-button
                data-type="submit"
                data-theme="primary"
                data-block="true">
                Send
              </pd-button>
            </pd-col>
            <pd-col data-size="6">
              <pd-button data-type="reset" data-block="true">
                Clear
              </pd-button>
            </pd-col>
          </pd-row>
        </pd-form>
      </div>`,
      styles
    },
    {
      title: 'Failing Form with Custom Error Message',
      controller: function($timeout){
        const $ctrl = this;

        $ctrl.$onInit = () => {
          setData({});
        };

        $ctrl.onSubmit = () => {
          // Fake request simulation
          return new Promise((resolve, reject) => {
            const response = { status: 500, message: 'Internal Server Error' };
            $timeout(() => reject(response), 3000);
          });
        }

        $ctrl.onSubmitError = err => {
          // Here's where you handle server error
          console.log(err);
        };

        function setData(data){
          $ctrl.data = data;
        }

        $ctrl.$onInit();
      },
      dependencies: ['$timeout'],
      template: `
      <div data-form-container>
        <pd-form
          on-submit="$ctrl.onSubmit"
          on-submit-error="$ctrl.onSubmitError"
          data-error-message="Ops, request failed.">
          <pd-row>
            <pd-col data-size="12">
              <pd-field data-label="Name">
                <pd-input
                  data-name="name"
                  data-value="$ctrl.data.name"
                  data-required="true" />
              </pd-field>
            </pd-col>
          </pd-row>
          <pd-row>
            <pd-col data-size="12">
              <pd-field data-label="Email">
                <pd-input
                  data-type="email"
                  data-name="email"
                  data-value="$ctrl.data.email"
                  data-required="true" />
              </pd-field>
            </pd-col>
          </pd-row>
          <pd-row>
            <pd-col data-size="6" data-offset="3">
              <pd-button
                data-type="submit"
                data-theme="primary"
                data-block="true">
                Subscribe
              </pd-button>
            </pd-col>
          </pd-row>
        </pd-form>
      </div>`,
      styles
    }
  ]
};
