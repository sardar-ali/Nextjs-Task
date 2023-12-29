import React, { useEffect, useState } from 'react'
import { getProductDetail, getProducts } from '@/api/products';
import ProductDetails from '@/components/ProductDetails';
import { useRouter } from 'next/router';


function ProductDetailScreen({ product }) {

    const router = useRouter();

    // navigate to product details 
    const detailHandler = (id) => {
        router.push(`/product-details/${id}`)
    }

    return (
        <>
            <ProductDetails />
        </>
    )
}

//generate static pages of dynamic route
export async function getStaticPaths() {
    // Fetch product slugs at build time
    const response = await getProducts();
    console.log("list api response ::", response)
    let paths = [];
    if (response?.data?.status) {
        paths = response?.data?.products?.map((itm) => {
            return {
                params: { id: `${itm?.id}` },
            };
        })
    }

    // Return the paths and indicate that other paths should 404
    return {
        paths,
        fallback: false,
    };
}

// Fetch product data based on the dynamic route parameter (slug)
export async function getStaticProps({ params }) {
    const response = await getProductDetail(params.id);
    return {
        props: {
            product: response?.data,
        },
        revalidate: 1,
    };
}







export default ProductDetailScreen
