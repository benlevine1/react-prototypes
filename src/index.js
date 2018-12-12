import React from 'react';
import ReactDOM from 'react-dom';

const luckyNumber = () => (Math.floor((Math.random()*1000)+1))

const user = {
    name: 'Gerard',
    luckyNumber: luckyNumber()
}

const greeting = user => (
<div>
    <h1>Hello</h1>
    <h2 className = 'text-muted'>Your lucky Number is {user.luckyNumber}</h2>
</div>) 

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);
