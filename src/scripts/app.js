import * as _ from 'lodash';
import * as helperModule from './my-helper-module';
import './sharedModule';
import './../styles/app.css';
import './../styles/appStyles.scss';
import homeIcon from '../images/home.png';
import natureImg from '../images/nature.jpg';

const homeImg = document.getElementById('home');
homeImg.src = homeIcon;

const frontImg = document.getElementById('frontImg');
frontImg.src = natureImg;

console.log('Welcome! Greetings from app.js. Let\'s learn Webpack2');

console.log(helperModule.greetings);

const arr = [1, 2, 3];
_.each(arr, val => {
    console.log('Output from Lodash _.each for Element ' + val);
});
