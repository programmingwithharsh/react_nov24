import ReactDOM from 'react-dom/client';
import React from 'react';
import Main from './Main'; // importing Main Component

/*
Layout
    Header
    Main 
    Sidebar 
    Footer

import * as All from './Layout';
<All.Header/>
*/

// import { One, Two } from './Main';

const root = ReactDOM.createRoot(document.getElementById('demo'));

root.render(<Main />); // calling Main Component