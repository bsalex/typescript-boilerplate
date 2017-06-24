import './SomeComponentFromHtml.css';
import template from './SomeComponentFromHtml.html';

export default class SomeComponentFromHtml {
    bottomInput: HTMLInputElement | null;
    initialText: string;

    constructor(initialText: string = '') {
        this.initialText = initialText;
    }

    render(): Element {
        const element = document.createElement('div');
        element.innerHTML = template;

        const topInput = element.querySelector(
            '.some-component-from-html__input--top'
        ) as HTMLInputElement | null;
        const bottomInput = element.querySelector(
            '.some-component-from-html__input--bottom'
        ) as HTMLInputElement | null;

        if (topInput && bottomInput) {
            topInput.value = this.initialText;
            bottomInput.value = this.initialText;

            topInput.addEventListener('keyup', () => {
                bottomInput.value = topInput.value;
            });
        }

        return element;
    }
}
