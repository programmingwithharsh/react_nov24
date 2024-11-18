import React from "react";
import styles from "./Welcome.module.css";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

class AddProduct extends React.Component {

    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }

    handleSubmit = (event) => {
        event.preventDefault(); // stop page refresh
        const productName = event.target.elements.productName.value;
        if (!productName) {
            alert("Pleaes enter product name");
        } else {
            this.setState({
                redirect: true
            })
        }
    }

    render() {
        const { redirect } = this.state;
        debugger;

        return (<>
            <div className="row">
                {
                    redirect && (
                        <Navigate to="/products" />
                    )
                }
            </div>
            <div className="row">
                <div className="col-xxl-3" ></div>
                <div className="col-xxl-6" >
                    <h1>Add Product</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        Product name <input className="form-control" type="text" placeholder="Enter product name" name="productName" />
                        Image Url <input className="form-control" type="text" placeholder="Enter image url" name="imageUrl" />
                        Product Code <input className="form-control" type="text" placeholder="Enter product code" name="productCode" />
                        Date <input className="form-control" type="date" name="releaseDate" />
                        Description <input className="form-control" type="text" placeholder="Enter description" name="description" />
                        Price <input className="form-control" type="text" placeholder="Enter Price" name="price" />
                        Rating <input className="form-control" type="text" placeholder="Enter Rating" name="rating" />
                        <input type="submit" value="Add Product" className="btn btn-primary mt-2" />
                    </form>
                    <Link to="/products" className="btn btn-primary mt-2">Navigate to Products</Link>
                </div>
                <div className="col-xxl-3" ></div>
            </div>
        </>);
    }
}

export default AddProduct;