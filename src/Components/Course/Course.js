import React from 'react';
import { Button } from 'react-bootstrap';

const Course = (props) => {
  const {img,Title} = props.course
    return (
<div className="col-md-6">
 <div className="card" style={{"maxWidth": "540px"}}>
 <div className="row">
   
     <img src={img} className="img-fluid rounded-start" alt="..."/>
     <h5 className="card-title">{Title}</h5>
        <h6>Price:$120</h6>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <Button  className="bg-danger">Buy Now</Button>
   </div>
   </div>
   </div>

        
    );
};

export default Course;