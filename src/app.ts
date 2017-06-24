import './app.css';
import SomeComponent from './components/SomeComponent/SomeComponent';
import SomeComponentFromHtml from './components/SomeComponentFromHtml/SomeComponentFromHtml';

class App {
    render(): HTMLElement {
        const element = document.createElement('div');
        element.innerHTML = '<h1 class="app__header">The App</h1>';
        element.appendChild(new SomeComponent().render());
        element.appendChild(
            new SomeComponentFromHtml('Initial text from App').render()
        );
        return element;
    }
}

document.body.appendChild(new App().render());
