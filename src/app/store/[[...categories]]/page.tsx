import { ProductsWrapper } from "app/app/components/Store/ProductsWrapper/ProductsWrapper"
import { getProducts } from "app/services/shopify/products";


interface CategoryProps {
    params: {
        categories: string[]
    };
}

export default async function Category(props: CategoryProps){

    const products = await getProducts()
    
    const { categories } = props.params
    // throw new Error('Boom!')

    return (
        <ProductsWrapper products={products}/>
        
    )
}