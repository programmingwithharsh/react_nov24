import Product from "./Product";
import Star from './Star';
export default function ProductList(props) {
    return <>
        <h1>Product List Functional Component</h1>
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
                {props.products.map((item, index) => (
                    <tr key={index}>
                        <td><img src={item.imageUrl} width="50" height="50" /></td>
                        <td>{item.productName}</td>
                        <td>{item.productCode}</td>
                        <td>{item.releaseDate}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <td>{item.starRating}<Star /></td>
                    </tr>
                ))}
            </tbody>
        </table>
        <Product />
    </>
}