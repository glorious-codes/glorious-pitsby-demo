import Vue from '@vue';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import vanillaComponents from '@vanilla/index.js';

Vue.config.productionTip = false;
Enzyme.configure({ adapter: new Adapter() });
window.vanillaComponents = vanillaComponents;
