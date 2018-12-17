import './styles/style.css';

function component(): HTMLDivElement {
    let element: HTMLDivElement = document.createElement('div');

    element.innerHTML = 'TypeScript test';

    return element;
}

document.body.appendChild(component());