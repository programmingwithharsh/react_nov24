import React from 'react';
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import Welcome from './Welcome';
import Title from './Title';
import Register from './Register';
import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import ProductDetail from './ProductDetail';
import UserList from './UserList';
import UserListFunctional from './UserListFunctional';
import CoreBootstrap from './core-bootstrap/CoreBootstrap';
import ReactBootstrap from './react-bootstrap/ReactBootstrap';
import { removeProduct, addProduct } from "./redux/actions";
import HooksExample from './Hooks/HooksExample';

export default class Main extends React.Component { // Exporting a component
    constructor(props) {
        super(props);
        // console.log("Main Component", this.props);
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

    componentDidMount() {
        this.props.dispatch(removeProduct(1));
        this.props.dispatch(addProduct({
            "productId": 6,
            "productName": "iPhone 15 plus",
            "productCode": "100",
            "releaseDate": "March 19, 2024",
            "description": "Excellent Phone",
            "price": 80000,
            "starRating": 3.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
        }))
    }

    render() { // lifecycle
        return <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={<Welcome username={this.props.username} />}></Route>
                    <Route path="/products" element={<ProductList products={this.state.products} />} ></Route>
                    <Route path="/addproduct" element={<AddProduct address="Delhi"/>} ></Route>
                    <Route path="/title" element={<Title username={this.props.username} interest={this.props.interest} birth={this.props.birth} />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/products/:id" element={<ProductDetail />}></Route>
                    <Route path="/users" element={<UserList />}></Route>
                    <Route path="/users2" element={<UserListFunctional />}></Route>
                    <Route path="/corebootstrap" element={<CoreBootstrap />}></Route>
                    <Route path="/reactbootstrap" element={<ReactBootstrap />}></Route>
                    <Route path="/hooks" element={<HooksExample />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    }
}
