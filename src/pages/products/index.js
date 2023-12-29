import React from 'react'
import { getProducts } from '@/api/products';
import Products from '@/components/Products';

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