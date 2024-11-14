import ReactDOM from 'react-dom/client';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('demo'));

// Without JSX
const element = React.createElement("h1", {}, "Programming with Harsh");

// With JSX, directly write HTML code inside JS file
const element2 = <h1>Programming with Harsh</h1>;

root.render(element);