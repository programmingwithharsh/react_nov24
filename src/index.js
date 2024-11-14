import ReactDOM from 'react-dom/client';
import React from 'react';

const root = ReactDOM.createRoot(document.getElementById('demo'));

const flowers = ["Rose", "Dahlia", "Magnolia", "Tulip", "Daisy"];
// Without JSX
const element = React.createElement("h1", {}, "Programming with Harsh");
const element_ = React.createElement(
    "ul",
    {},
    flowers.map((item, index) => React.createElement("li", { key: index }, item))
)

// With JSX, directly write HTML code inside JS file
const element2 = <h1>Programming with Harsh 2 + 2 is {2 + 2}</h1>;
const element2_ = <ul>
    {flowers.map((item, index) => (
        <li key={index}>{item}</li>
    ))
    }
</ul>;

root.render(element2_);