const fs = require("fs/promises")

class ProductManager {
    constructor(path) {
        this.pathDB = path
    }

    async getProducts() {
        try {
            const allProducts = await fs.readFile(this.pathDB)
            return JSON.parse(allProducts)
        } catch (error) {
            console.error(error)
        }  
    }
}

module.exports = ProductManager