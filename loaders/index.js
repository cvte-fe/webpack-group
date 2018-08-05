import './style.css';
import ImageExample from './image.jpg';
import Miki from './example.miki';

function component() {
  const element = document.createElement('div');
  const p = document.createElement('p');
  const img = document.createElement('img');

  p.innerHTML = 'Loader example...' + Miki;
  img.src = ImageExample;

  element.classList.add('warn');
  element.appendChild(p);
  element.appendChild(img);

  return element;
}

document.body.appendChild(component());
