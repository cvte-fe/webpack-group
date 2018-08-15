import Text from './loader-test.txt';

function component() {
  const element = document.createElement('div');
  const p = document.createElement('p');
  p.innerHTML = 'Multi Pitch Loader: ' + Text;
  element.appendChild(p);
  return element;
}

document.body.appendChild(component());
