module.exports = {
  name: 'Input',
  description: 'Abstraction of a native input.',
  properties: [
    {
      name: 'name',
      type: 'String',
      values: 'any',
      required: true
    },
    {
      name: 'type',
      type: 'String',
      values: 'color, date, datetime-local, email, file, hidden, image, month, number, password, range, search, tel, text, time, url, week'
    },
    {
      name: 'v-model',
      type: 'Expression',
      values: 'any'
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
      name: 'on-change',
      type: '<void> Function',
      values: 'any'
    }
  ],
  examples: [
    {
      title: 'Default Input',
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
            <pd-input name="example" v-model="value" />
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
      title: 'Input with Initial Value',
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
            <pd-input name="example" v-model="value" />
          </pd-col>
        </pd-row>
        <pd-row>
          <pd-col size="12">
            Initial Value: {{ value }}
          </pd-col>
        </pd-row>
      </div>`
    },
    {
      title: 'Required Input',
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
            <pd-input name="example" v-model="value" required />
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
      title: 'Disabled Input',
      template: `
      <pd-row>
        <pd-col size="3">
          <pd-input name="example" disabled />
        </pd-col>
      </pd-row>`
    },
    {
      title: 'Input with Change listener',
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
            <pd-input name="example" v-model="value" :on-change="onChange" />
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
