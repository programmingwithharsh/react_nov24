import React from "react";
// import "./Welcome.css";
import styles from "./Welcome.module.css";

class Welcome extends React.Component {

    constructor() { // lifecyle
        super();
        this.state = {
            username: "Kavitha",
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
        console.log("Constructor lifecycle 1");
    }

    updateUsername = () => {
        this.setState({ // to update state, whenever state updates component rerender
            username: "Sanjeev"
        })
    }

    render() { // lifecyle
        console.log("Render lifecycle 2");
        console.log(this.state);
        let myStyle = { color: "blue", backgroundColor: "yellow" };

        return (<div className={styles.containerDiv}>
            <h1>Username is {this.state.username}</h1>

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>productName</th>
                        <th>productCode</th>
                        <th>releaseDate</th>
                        <th>description</th>
                        <th>price</th>
                        <th>starRating</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.products.map((item, index) => (
                        <tr key={index}>
                            <td><img src={item.imageUrl} width="50" height="50"/></td>
                            <td>{item.productName}</td>
                            <td>{item.productCode}</td>
                            <td>{item.releaseDate}</td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>{item.starRating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={this.updateUsername}>Update Username</button>
            <h1 className="innerDiv" style={{ color: "blue", backgroundColor: "yellow" }}>Welcome Class Component header 1</h1>
            <h2 style={myStyle}>Welcome Class Component header 2</h2>
            <h3>Welcome Class Component header 3</h3>
            <div className="innerDiv">Welcome Class Component div</div>
        </div>
        );
    }
}

export default Welcome;