module.exports = {
  name: 'Field',
  description: 'Container for form controls like input, select etc.',
  properties: [
    {
      name: 'label',
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
        <pd-col size="4">
          <pd-field label="Email Address">
            <pd-input type="email" name="email" />
          </pd-field>
        </pd-col>
      </pd-row>`
    },
    {
      title: 'Field with Required Input',
      controller: {
        data(){
          return {
            value: ''
          };
        },
        methods: {
          onSubmit(evt){
            evt.preventDefault();
            this.setValue('');
          },
          setValue(value){
            this.value = value;
          }
        }
      },
      template: `
      <form @submit="onSubmit($event)">
        <pd-row>
          <pd-col size="4">
            <pd-field label="Email Address">
              <pd-input type="email" name="email" v-model="value" required />
            </pd-field>
          </pd-col>
        </pd-row>
        <pd-row>
          <pd-col size="3">
            <pd-button type="submit" theme="primary">
              Submit
            </pd-button>
          </pd-col>
        </pd-row>
      </form>`
    }
  ]
};
