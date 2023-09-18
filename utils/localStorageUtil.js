class LocalStorageUtil {
    constructor() {
        this.keyName = 'products'
    }

    getProducts() {
        const productsLocalStorage = localStorage.getItem(this.keyName)
        if (productsLocalStorage !== null) {
            return JSON.parse(productsLocalStorage)
        }
        return []
    }

    putProducts(id) {
        let prod = this.getProducts()
        let pushProd = false
        const index = prod.indexOf(id)
        if (index === -1) {
            prod.push(id)
            pushProd = true
        } else {
            prod.splice(index, 1)
        }
        
        localStorage.setItem(this.keyName, JSON.stringify(prod))

        return {
            pushProd: pushProd, prod: prod
        }
    }
}

const localUtil = new LocalStorageUtil()
