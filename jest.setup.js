import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import vanillaComponents from '@vanilla/index.js';

Enzyme.configure({ adapter: new Adapter() });
window.vanillaComponents = vanillaComponents;
