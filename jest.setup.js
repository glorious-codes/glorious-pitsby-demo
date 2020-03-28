import Vue from '@vue';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import angular from 'angular';
import vanillaComponents from '@vanilla/index.js';
import angularComponents from '@angular/index.js';
import 'angular-mocks';

Vue.config.productionTip = false;
Enzyme.configure({ adapter: new Adapter() });
global.angular = angular;
global.angularComponents = angularComponents;
global.vanillaComponents = vanillaComponents;
