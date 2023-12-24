import { env } from "app/config/env"
import { shopifyUrls } from "./urls"
import axios from "axios"


export const getProducts = async (id?:string): Promise<ProductType[]> => {
    try {
        const apiUrl = id ? `${shopifyUrls.products.all}?ids=${id}` : shopifyUrls.products.all
        const response = await fetch(apiUrl, {
            headers: new Headers({
                'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
            })
        })
        /* const response = await axios.get(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2023-10/products.json`, {
        headers: {
            'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY || ""
        }
        })
        console.log(response) */
        const {products} = await response.json()

        const transformedProducts = products.map((product: any) => {
            return {
                id: product.id,
                gql_id: product.variants[0].admin_graphql_api_id,
                title: product.title,
                description: product.body_html,
                price: product.variants[0].price,
                image: product.images[0].src,
                quantity: product.variants[0].inventory_quantity,
                handle: product.handle,
                tags: product.tags
            }
        })
        return transformedProducts
        
    } catch (error) {
        console.log(error)
        const voidProductList: ProductType[] = []
        return voidProductList
        
    }
  
}

export const getMainProducts = async (): Promise<ProductType[]> => {
    try {
        const response = await fetch(shopifyUrls.products.mainProducts, {
            headers: new Headers({
              'X-Shopify-Access-Token': env.SHOPIFY_TOKEN
            }),
            cache: "force-cache",
            next: {
                tags: ['main-products']
            }
          })
        
          const {products} = await response.json()
        
          return products
    } catch (error) {
        console.log(error)
        const voidProductList: ProductType[] = []
        return voidProductList
    }
  }