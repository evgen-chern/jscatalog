import Comics from "../comics/comics";

class Main {
   async render() {
        await Comics.render();
    }
}

export default new Main();