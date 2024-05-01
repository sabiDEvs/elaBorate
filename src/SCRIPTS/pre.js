import '../CSS/pre.css';
import {renderHeader} from './modules/header';
import {renderFooter} from './modules/footer';
const body = document.querySelector('body');
renderHeader(body);
renderFooter(body);