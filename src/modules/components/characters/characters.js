import './characters.scss';
import { getDataApiEx } from '../../getDataApi';
import { ROOT_MODAL } from '../../constants';

import imgClose from './img/close.svg';

class Characters {
    renderContent(apiData) {
        let htmlData = '';
        apiData.forEach(({ name, thumbnail: { path ,extension }}) => {
            const imgSrc = path + '/standard_xlarge.' + extension;
            
            htmlData += `
                <li class="characters__item">
                    <img class="characters__img" src="${imgSrc}"/>
                    <span class="characters__name">${name}</span>
                </li>
            `;
        });

        const htmlWrapper = `<div class="wrapper">
                                <ul class="characters__container">${htmlData}</ul>
                                <button class="btn characters__close" onclick="modal.innerHTML=''" style="background-image: url(${imgClose}) "></button>
                            </div>`;

        ROOT_MODAL.innerHTML = htmlWrapper;
    }

    renderNotify() {
        alert('Нет данных о персонажах');
    }

    async render(dataUri) {
        const apiData = await getDataApiEx.getData(dataUri);

        apiData.length ? this.renderContent(apiData) : this.renderNotify();
    }   
}

export default new Characters();