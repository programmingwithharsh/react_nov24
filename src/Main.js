import React from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import Welcome from './Welcome';
import Title from './Title';
import Star from './Star';

export default class Main extends React.Component { // Exporting a component
    render() { // lifecycle
        return <div>
            <h1>Main Class Component </h1>
            <ProductList />
            <AddProduct />
            <Welcome />
            <Title />
            <Star />
        </div>
    }
}
