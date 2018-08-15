import './style.css';
import File from './Demo.jpg';
// import Example from 'file-loader?modules!./image.jpg';

function component() {
  const element = document.createElement('div');
  const p = document.createElement('p');
  const img = document.createElement('img');

  p.innerHTML = 'Common Loader';
  img.src = File;

  element.classList.add('warn');
  element.appendChild(p);
  element.appendChild(img);

  return element;
}

document.body.appendChild(component());
