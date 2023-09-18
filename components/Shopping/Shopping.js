class Shopping {
    handleClear() {
        ROOT_SHOPPING.innerHTML = ''
    }

    render() {
        const productsStorage = localUtil.getProducts()
        let htmlCatalog = ''
        let sumCatalog = 0

        if(productsStorage.length !== 0) {
            CATALOG.forEach(({ id, name, price }) => {
                if (productsStorage.indexOf(id) !== -1) {
                    htmlCatalog += `
                        <tr>
                            <td class="shopping-element__name">🤗 ${name}</td>
                            <td class="shopping-element__price">${price.toLocaleString()} USD</td>
                        </tr>
                    `
                    sumCatalog += price
                } 
            })
        } else {
            htmlCatalog = `
                <tr>
                    <td class="shopping-element__name">🤗 Пустая корзина</td>
                </tr>
            `
        }
       

        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shoppingPage.handleClear()">👍</div>
                <table>
                    ${htmlCatalog}
                    <tr>
                        <td class="shopping-element__name">🤟 Общая сумма</td>
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} USD</td>
                    </tr>
                </table>
            </div>
        `
        ROOT_SHOPPING.innerHTML = html
    }
}

const shoppingPage = new Shopping()