import React from 'react';
import { Button } from 'react-bootstrap';
import './Home.css'
const Home = () => {
    return (
        <div>
            <h2>Wellcome to home</h2>
            <div class="row row-cols-1 row-cols-md-2 g-16 ">
  <div class="col">
    <div class="card">
      <img  src="https://stylemixthemes.com/masterstudy/tech/wp-content/uploads/sites/21/2020/12/29-272x161.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Accounting Technologies</h5>
        <h6>Price:$120</h6>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <Button className="bg-danger">Buy Now</Button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://stylemixthemes.com/masterstudy/tech/wp-content/uploads/sites/21/2020/12/19-272x161.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Modern Technologies</h5>
        <h6>Price:$120</h6>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ipsum quis ipsum facilisis sit amet.

</p> <Button className="bg-danger">Buy Now</Button>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://stylemixthemes.com/masterstudy/tech/wp-content/uploads/sites/21/2018/08/course-preview-272x161.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Modern Languages</h5>
        <h6>Price:$120</h6>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
        <Button className="bg-danger">Buy Now</Button>
         </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://stylemixthemes.com/masterstudy/tech/wp-content/uploads/sites/21/2018/08/photo-1461749280684-dccba630e2f6-272x161.jpeg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Computer Technologies</h5>
        <h6>Price:$120</h6>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam ipsum quis ipsum facilisis sit amet.

</p> <Button className="bg-danger">Buy Now</Button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;