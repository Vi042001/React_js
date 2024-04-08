import React from 'react'
import MobileList from './MobileList'

const book1 = {
    image: 'https://rukminim2.flixcart.com/image/312/312/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg?q=70',
    title: 'iphone',
    price: '$200'
}
const book2 = {
    image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/q/g/-original-imagtqqd4vcdzqdg.jpeg?q=70',
    title: 'realme 11x',
    price: '$100'
}

export default function mobile() {
    return (
        <div>
            <MobileList 
            image={book1.image} 
            title={book1.title} 
            price={book1.price}
            />
            <MobileList 
            image={book2.image} 
            title={book2.title} 
            price={book2.price}
            />
        </div>
    )
}
