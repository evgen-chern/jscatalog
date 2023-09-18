function render() {
    const productStore = localUtil.getProducts()

    headerPage.render(productStore.length)
    prod.render()
}

spinnerPage.render()
let CATALOG = []

//https://api.jsonserve.com/NVxtM2
//server/catalog.json
fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body
        setTimeout(() => {
            spinnerPage.handleClear()
            render()
        }, 1600)
        
    })
    .catch(error => {
        errorPage.render()
    })

