import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import DropdownAction from '~/components/elements/basic/DropdownAction';
import { getMerchantProduct } from '~/store/product/action';
import ProductColumn from './table-columns/ProductColumn';

const TableProjectItems = () => {
    const dispatch = useDispatch()
    const {product, productGetLoading} = useSelector(state=>state.product)


    useEffect(() => {
     dispatch(getMerchantProduct("1"))
    }, [])
    
    let  products 
    if(!productGetLoading){
        products = product.map((product, index)=>{
                return <ProductColumn product={product} num={index} key={index} />
            })
    }

    return (
        <div className="table-responsive">
            <table className="table ps-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                      
                      
                        <th>Price</th>
                        <th>Categories</th>
                        <th>Date</th>
                        <th>Bid Status</th>
                        <th>Create Event</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{!productGetLoading && products}</tbody>
            </table>
        </div>
    );


};

export default TableProjectItems;
