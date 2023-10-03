import { API_URL, URL_COMICS, URL_CHARACTERS, ROOT_INDEX } from '../../constants';
import { getDataApiEx } from '../../getDataApi';
import Error from '../error/error';
import Characters from '../characters/characters';
import './comics.scss';

class Comics {

    renderComics(apiData) {
        let htmlContent = '';

        apiData.forEach(({ id, title, thumbnail: { extension, path } }) => {
            
            if(path.lastIndexOf('image_not_available') === -1){
                const imgSrc = path + '/standard_xlarge.' + extension;
                const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS;

                htmlContent += `
                    <li class="comics__item" data-uri="${uri}">
                        <span class="comics__title">${title}</span>
                        <img class="comics__image" src="${imgSrc}"/>
                    </li>
                `;
            }
        });

        const htmlWrapper = `
            <ul class="comics__container">${htmlContent}</ul>
        `;

        ROOT_INDEX.innerHTML = htmlWrapper;
    }

    async render() {
        const apiData = await getDataApiEx.getData(API_URL + URL_COMICS);
        apiData ? this.renderComics(apiData) : Error.render();
    }

    eventListener() {
        document.querySelectorAll('.comics__item').forEach(element => {
            let dataUri = element.getAttribute('data-uri');

            element.addEventListener('click', () => {
                Characters.render(dataUri);
            })
        })
    }
}

export default new Comics();