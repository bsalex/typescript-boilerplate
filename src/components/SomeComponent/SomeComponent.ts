import './SomeComponent.css';
import sampleImage from './sample.jpg';

export default class SomeComponent {
    onButtonClick() {
        alert('Button click!');
    }

    render(): Element {
        const element = document.createElement('div');
        const header = document.createElement('h2');
        const button = document.createElement('button');
        const image = document.createElement('img');

        element.className = 'component some-component';

        header.className = 'component__header some-component__header';
        header.appendChild(
            document.createTextNode(
                'Some component with programmatically created markup'
            )
        );

        button.className = 'some-component__button';
        button.appendChild(document.createTextNode('Text inside the button'));
        button.addEventListener('click', this.onButtonClick);
        image.src = sampleImage;

        element.appendChild(header);
        element.appendChild(button);
        element.appendChild(image);

        return element;
    }
}
