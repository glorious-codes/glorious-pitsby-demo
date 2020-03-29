describe('Alert', () => {
  let compile;

  beforeEach(() => {
    angular.mock.module('angularComponents');
    inject(($rootScope, $compile) => {
      const scope = $rootScope.$new(true);
      compile = (bindings = {}, content = '') => {
        const template = `<pd-alert
                            data-theme="{{ $ctrl.theme }}"
                            data-trigger-text="{{ $ctrl.triggerText }}"
                            on-trigger-click="$ctrl.onTriggerClick">
                            ${content}
                          </pd-alert>`;
        scope.$ctrl = bindings;
        const element = $compile(template)(scope);
        scope.$digest();
        return element;
      };
    });
  });

  it('should have appropriate class', () => {
    const element = compile();
    expect(element.find('div').attr('class')).toEqual('pd-alert');
  });

  it('should optionally set a success alert', () => {
    const element = compile({ theme: 'success' });
    expect(element.find('div').attr('class').includes('pd-alert-success')).toEqual(true);
  });

  it('should optionally set a danger alert', () => {
    const element = compile({ theme: 'danger' });
    expect(element.find('div').attr('class').includes('pd-alert-danger')).toEqual(true);
  });

  it('should optionally set a trigger', () => {
    const onTriggerClick = jest.fn();
    const element = compile({ onTriggerClick });
    element.find('button').triggerHandler('click');
    expect(onTriggerClick).toHaveBeenCalled();
  });

  it('should set "Retry" as default trigger text', () => {
    const onTriggerClick = jest.fn();
    const element = compile({ onTriggerClick });
    const triggerButton = element.find('button');
    expect(triggerButton[0].textContent.trim()).toEqual('Retry');
  });

  it('should optionally set a trigger text', () => {
    const onTriggerClick = jest.fn();
    const triggerText = 'Try Again';
    const element = compile({ triggerText, onTriggerClick });
    const triggerButton = element.find('button');
    expect(triggerButton[0].textContent.trim()).toEqual(triggerText);
  });

  it('should set a trigger css class if a trigger action has been passed', () => {
    const onTriggerClick = jest.fn();
    const element = compile({ onTriggerClick });
    expect(element.find('div').attr('class').includes('pd-alert-has-trigger')).toEqual(true);
  });

  it('should render some content', () => {
    const element = compile({}, '<p>Hello!</p>');
    expect(element.find('p').text()).toEqual('Hello!');
  });
});
