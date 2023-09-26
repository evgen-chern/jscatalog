import { ROOT_INDEX } from '../../constants';
import './error.scss';

class Error {
    render() {
        const htmlWrapper = `
            <div class="error__container">
                <p class="error__alert">Произошла ошибка.</p>
                <p class="error__alert">Попробуйте зайти позже.</p>
            </div>
        `;

        ROOT_INDEX.innerHTML = htmlWrapper;
    }
}

export default new Error();