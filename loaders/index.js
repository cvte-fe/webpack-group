import './style.css';
// import Example from 'file-loader?modules!./image.jpg';
import Example from './image.jpg';
import Text from './loader-test.txt';
import Text2 from './multi-loader-test.tmt';

console.log(Text, Text2)

function component() {
  const element = document.createElement('div');
  const p = document.createElement('p');
  const img = document.createElement('img');

  p.innerHTML = 'Loader example...' + Text + Text2;
  // p.innerHTML = 'Loader example...';
  img.src = Example;

  element.classList.add('warn');
  element.appendChild(p);
  element.appendChild(img);

  return element;
}

document.body.appendChild(component());
