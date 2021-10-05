import React from 'react';
import { Button } from 'react-bootstrap';
import './Home.css'
const Home = () => {
    return (
        <div>
            <h2>Wellcome to home</h2>
            <div className="row row-cols-1 row-cols-md-2 g-16 ">
  <div className="col">
    <div className="card">
      <img  src="https://stylemixthemes.com/masterstudy/tech/wp-content/uploads/sites/21/2020/12/29-272x161.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Accounting Technologies</h5>
        <h6>Price:$120</h6>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <Button className="bg-danger">Buy Now</Button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://stylemixthemes.com/masterstudy/tech/wp-content/uploads/sites/21/2020/12/19-272x161.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Modern Technologies</h5>
        <h6>Price:$120</h6>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ipsum quis ipsum facilisis sit amet.

</p> <Button className="bg-danger">Buy Now</Button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://stylemixthemes.com/masterstudy/tech/wp-content/uploads/sites/21/2018/08/course-preview-272x161.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Modern Languages</h5>
        <h6>Price:$120</h6>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <Button className="bg-danger">Buy Now</Button>
         </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://stylemixthemes.com/masterstudy/tech/wp-content/uploads/sites/21/2018/08/photo-1461749280684-dccba630e2f6-272x161.jpeg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Computer Technologies</h5>
        <h6>Price:$120</h6>
        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ipsum quis ipsum facilisis sit amet.

</p> <Button className="bg-danger">Buy Now</Button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;