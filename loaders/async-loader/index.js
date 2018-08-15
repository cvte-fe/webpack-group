import Text1 from './loader-test-1.txt';
import Text2 from './loader-test-2.txt';

function component() {
  const element = document.createElement('div');
  const p = document.createElement('p');
  p.innerHTML = 'Async Loader: ' + Text1 + Text2;
  element.appendChild(p);
  return element;
}

document.body.appendChild(component());
