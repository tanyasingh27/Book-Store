import React from 'react';
import './Book.css';


const book = (props) => (
    <li className="col col-md-11 book">
      <p className="col col-md-5">{props.title}</p>   
      <p className="col col-md-2">{props.author}</p>
      <p className="col col-md-2">{props.date}</p>
      <button className="btn btn-info" onClick={props.edit}>Edit</button> &nbsp;
      <button className="btn btn-danger" onClick={props.delete}>Delete</button>
    </li>
);

export default book;