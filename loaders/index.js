import './style.css';
// import Example from 'file-loader?modules!./image.jpg';
import Example from './image.jpg';
import Text from './loader-test.txt';

function component() {
  const element = document.createElement('div');
  const p = document.createElement('p');
  const img = document.createElement('img');

  p.innerHTML = 'Loader example...' + Text;
  // p.innerHTML = 'Loader example...';
  img.src = Example;

  element.classList.add('warn');
  element.appendChild(p);
  element.appendChild(img);

  return element;
}

document.body.appendChild(component());
