import _ from 'lodash';
import Uniform from './uniform.ttf';
import Samosan from './samosan.ttf';
import './style.css';
import Mountains from './mountains.jpg';
import Dog from './dog.jpg';


function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Dog;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());

