import Main from './components/main/main';
import Comics from './components/comics/comics';

(async () => {
   await Main.render();
   Comics.eventListener();
})();
