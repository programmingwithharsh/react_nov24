import Main from "./Main";
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        products: state
    }
}

const App = connect(mapStateToProps)(Main);
export default App;