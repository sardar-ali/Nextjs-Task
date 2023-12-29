import React from 'react'
import Product from './Product'
import Link from 'next/link'

function Products({ products }) {
    return (
        <div className='main-container'>
            <div className='main-header'>
                <Link href="/" style={{textDecoration:"none"}}>
                    <h4>Batteries</h4>
                </Link>

                <p>View all batteries</p>
            </div>
            <div className='product-container'>
                {products?.length && products.slice(0, 6)?.map((product) => {

                    return (
                        <Product product={product} />
                    )
                })
                }
            </div>
        </div>
    )
}

export default Products