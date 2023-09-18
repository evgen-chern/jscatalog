class Products {
    constructor() {
        this.classNameActive = 'products_element__btn_active'
        this.labelAdd = 'Добавить в корзину'
        this.labelRemove = 'Удалить из корзины'
    }

    handleSetLocationStorage(element, id) {
        const { pushProd, prod } = localUtil.putProducts(id)
        if (pushProd) {
            element.classList.add(this.classNameActive)
            element.innerHTML = this.labelRemove
        } else {
            element.classList.remove(this.classNameActive)
            element.innerHTML = this.labelAdd
        }
        headerPage.render(prod.length)
    }

    render() {
        
        const productsStorage = localUtil.getProducts()
        let htmlCatalog = ''

        CATALOG.forEach(({ id, name, price, img }) => {
            let activeClass = ''
            let activeText = ''

            if (productsStorage.indexOf(id) === -1) {
                activeText = this.labelAdd 
            } else {
                activeText = this.labelRemove
                activeClass = this.classNameActive
            }

            htmlCatalog += `
                <li class="products_element">
                    <span class="products_element__name">${name}</span>
                    <img class="products_element__img" src="${img}" />
                    <span class="products_element__price"> 😲 ${price.toLocaleString()} BYN</span>
                    <button class="products_element__btn ${activeClass}" onclick="prod.handleSetLocationStorage(this, '${id}')">
                        ${activeText}
                    </button>
                </li>
            `
        })

        const html = `<ul class="products_container">${htmlCatalog}</ul>`

        ROOT_PRODUCTS.innerHTML = html
    }
}

const prod = new Products()
