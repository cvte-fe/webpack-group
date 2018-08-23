
import File from './bar';
import './style.less';

function component() {
  const element = document.createElement('div');
  const title = document.createElement('p');
  const subtitle = document.createElement('p');
  const img = document.createElement('img');
  img.src = File;
  element.classList.add('container');
  title.innerHTML = 'Hello, I am a TITLE';
  title.classList.add('title');

  subtitle.innerHTML = 'Hello, I am a SUBTITLE';
  subtitle.classList.add('subtitle');
  
  element.appendChild(img);
  element.appendChild(title);
  element.appendChild(subtitle);
  
  return element;
}

document.body.appendChild(component());

