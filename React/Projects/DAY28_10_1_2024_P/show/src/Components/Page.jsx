import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Page = () => {
    const [data, setData] = useState([]);

    const generateStars = (rating) => {
        const filledStars = '\u2605'.repeat(Math.floor(rating));
        const halfStar = rating % 1 !== 0 ? '\u2606' : '';
        const emptyStars = '\u2606'.repeat(5 - Math.ceil(rating));
      
        return filledStars + halfStar + emptyStars;
      };
      

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    console.log(data);

    return (
        <div className="product-container">
            
            {data.map((item) => (
                <div key={item.id} className='product'>
                    <img src={item.image} alt={item.image} className='product-image' />
                    <p className='product-info-tittle'><b>{item.title}</b></p>
                    {/* <p className='product-info'>ID: {item.id}</p> */}
                    <p className='product-info'><b>category: {item.category}</b></p>
                    <p ><b>Price:<span className='product-info-price'>${item.price}</span></b></p>
                    <p className='product-info-rate'><b> {generateStars(item.rating.rate)} [{item.rating.rate}]Rating</b> </p>
                    {/* <p className='product-info-des'>Description: {item.description}</p> */}
                </div>
            ))}
        </div>
    );
};
