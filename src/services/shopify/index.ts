import { env } from "app/config/env"
import { shopifyurls } from "./urls"


export const getProducts = async () => {
    try {
        const response = await fetch(shopifyurls.products.all, {
            headers: new Headers({
                'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
            })
        })
        /* const response = await axios.get(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
        headers: {
            'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ""
        }
        }) */
        const {products} = await response.json()
        return products
        
    } catch (error) {
        console.log(error)
        
    }
  
}