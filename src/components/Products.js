import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { useRouter } from "next/router";

// import { getProducts } from '../api/products';

function Products({ products }) {

    // Navigate to the product details screen programmatically


    const router = useRouter();
    const detailHandler = (id) => {
        router.push(`/product-details/${id}`)
    }
    
    return (
        <>
            <div className='main-container'>
                <div className='main-header' >
                    <Link href="/" style={{ textDecoration: "none" }}> <h4>Batteries</h4></Link>
                    <p>View all batteries</p>
                </div>
                <div className='product-area'>
                    {products?.length && products?.slice(0, 6)?.map((itm) => {
                        return (
                            <div className='card' key={itm?.id} onClick={() => detailHandler(itm?.id)}>
                                <div className='img-card'>
                                    <img src={itm?.thumbnail} />
                                </div>
                                <div className='description'>
                                    <p>{itm?.title}</p>
                                    <p>{itm?.price} AED</p>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>

        </>
    )
}

export default Products