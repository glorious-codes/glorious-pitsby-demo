module.exports = {
  name: 'Textarea',
  description: 'Abstraction of a native textarea.',
  properties: [
    {
      name: 'name',
      type: 'String',
      values: 'any',
      required: true
    },
    {
      name: 'required',
      type: 'Boolean',
      values: 'true/false'
    },
    {
      name: 'disabled',
      type: 'Boolean',
      values: 'true/false'
    },
    {
      name: 'onChange',
      type: '<void> Function',
      values: 'any'
    }
  ],
  examples: [
    {
      title: 'Default Textarea',
      controller: {
        data(){
          return {
            value: ''
          };
        }
      },
      template: `
      <div>
        <pd-row>
          <pd-col size="3">
            <pd-textarea name="example" v-model="value" />
          </pd-col>
        </pd-row>
        <pd-row>
          <pd-col size="12">
            Value: {{ value }}
          </pd-col>
        </pd-row>
      </div>`
    },
    {
      title: 'Textarea with Initial Value',
      controller: {
        data(){
          return {
            value: 'Pitsby'
          };
        }
      },
      template: `
      <div>
        <pd-row>
          <pd-col size="3">
            <pd-textarea name="example" v-model="value" />
          </pd-col>
        </pd-row>
        <pd-row>
          <pd-col size="12">
            Value: {{ value }}
          </pd-col>
        </pd-row>
      </div>`
    },
    {
      title: 'Required Textarea',
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
          <pd-col size="3">
            <pd-textarea name="example" v-model="value" required />
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
    },
    {
      title: 'Disabled Textarea',
      controller: {
        data(){
          return {
            value: ''
          };
        }
      },
      template: `
      <pd-row>
        <pd-col size="3">
          <pd-textarea name="example" v-model="value" disabled />
        </pd-col>
      </pd-row>`
    },
    {
      title: 'Textarea with Change listener',
      controller: {
        data(){
          return {
            value: '',
            lastChange: ''
          };
        },
        methods: {
          onChange(data){
            this.setLastChange(JSON.stringify(data));
          },
          setLastChange(change){
            this.lastChange = change;
          }
        }
      },
      template: `
      <div>
        <pd-row>
          <pd-col size="3">
            <pd-textarea name="example" v-model="value" :on-change="onChange" />
          </pd-col>
        </pd-row>
        <pd-row>
          <pd-col size="12">
            Last Change: {{ lastChange }}
          </pd-col>
        </pd-row>
      </div>`
    }
  ]
};
