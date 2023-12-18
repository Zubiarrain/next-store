
interface CategoryProps {
    params: {
        categories: string[]
    };
}

export default function Category(props: CategoryProps){
    const { categories } = props.params
    // throw new Error('Boom!')

    return (
        <>
            <h1>Categoría dinámica: {categories}</h1>
        </>
        
    )
}