import ReactDOM from 'react-dom/client';
import React from 'react';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

let username = "Milind"; // string
let interest = ["Playing Musical Instrument", "Cycling", "Playing Cricket", "Music"]; // array
let birth = { // object
    place: "Mumbai",
    year: 2000
}

const root = ReactDOM.createRoot(document.getElementById('demo'));

root.render(<Main username={username} interest={interest} birth={birth} />);