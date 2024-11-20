const Spinner = () => {
    return (<div className="m-4">
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-primary" style={{ width: "3rem", height: "3rem" }} >
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>);
}

export default Spinner;