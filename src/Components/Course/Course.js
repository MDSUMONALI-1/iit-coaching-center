import React from 'react';

const Course = (props) => {
  const {img,Title} = props.course
    return (
<div className="col-md-6">
 <div class="card" style={{"max-width": "540px"}}>
 <div class="row">
   
     <img src={img} class="img-fluid rounded-start" alt="..."/>
     <h5 class="card-title">{Title}</h5>
        <h6>Price:$120</h6>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
   </div>
   </div>
   </div>

        
    );
};

export default Course;