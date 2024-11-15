import React from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import Welcome from './Welcome';
import Title from './Title';
import Star from './Star';

export default class Main extends React.Component { // Exporting a component
    constructor(props) {
        super(props);
        console.log("Main Component", this.props);
        this.state = {
            products: [
                {
                    "productId": 1,
                    "productName": "Leaf Rake",
                    "productCode": "GDN-0011",
                    "releaseDate": "March 19, 2016",
                    "description": "Leaf rake with 48-inch wooden handle.",
                    "price": 19.95,
                    "starRating": 3.2,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                },
                {
                    "productId": 2,
                    "productName": "Garden Cart",
                    "productCode": "GDN-0023",
                    "releaseDate": "March 18, 2016",
                    "description": "15 gallon capacity rolling garden cart",
                    "price": 32.99,
                    "starRating": 4.2,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                },
                {
                    "productId": 3,
                    "productName": "Hammer",
                    "productCode": "TBX-0048",
                    "releaseDate": "May 21, 2016",
                    "description": "Curved claw steel hammer",
                    "price": 8.9,
                    "starRating": 4.8,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                },
                {
                    "productId": 4,
                    "productName": "Saw",
                    "productCode": "TBX-0022",
                    "releaseDate": "May 15, 2016",
                    "description": "15-inch steel blade hand saw",
                    "price": 11.55,
                    "starRating": 3.7,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
                },
                {
                    "productId": 5,
                    "productName": "Video Game Controller",
                    "productCode": "GMG-0042",
                    "releaseDate": "October 15, 2015",
                    "description": "Standard two-button video game controller",
                    "price": 35.95,
                    "starRating": 4.6,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
                }
            ]
        }
    }
    render() { // lifecycle
        return <div>
            <h1>Main Class Component </h1>
            <h1>Props Username is {this.props.username}</h1>
            <ProductList products={this.state.products} />
            <AddProduct />
            <Welcome username={this.props.username} />
            <Title username={this.props.username} interest={this.props.interest} birth={this.props.birth} />
            <Star />
        </div>
    }
}
