const Card = () => {
    return (<>
        <div className="card" style={{ width: "12rem" }}>
            <img src="https://m.media-amazon.com/images/I/31MDfDP3oeL.AC_SX250.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <div>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                </div>
                <p className="card-text">₹999 ₹2,240 (55% off)</p>
                <a href="#" className="btn btn-danger">Limited Time Deal</a>
            </div>
        </div>
    </>);
}

export default Card;