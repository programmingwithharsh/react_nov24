import Product from "./Product";

export default function ProductList(props) {
    return <>
        <h1>Product List Functional Component</h1>
        <div className="table-responsive">
            <table className="table table-striped table-hover">
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
                        <Product product={item} key={index} />
                    ))}
                </tbody>
            </table>
        </div>
    </>
}