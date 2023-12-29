import React from 'react'
import Products from '@/components/Products';
import { getProducts } from '@/api/products';

function ProductScreen({ products }) {
    
    return (
        <Products products={products} />
    )
}


// Get data through SSR here
export async function getServerSideProps() {

    const response = await getProducts();
    return {
        props: {
            products: response?.data?.products,
        },
    };
}




export default ProductScreen