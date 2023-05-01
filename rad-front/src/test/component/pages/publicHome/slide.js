import React from 'react';
import slide1 from'../../../../images/slice2.jpeg'
import slide2 from'../../../../images/slice3.jpeg'
import slide3 from'../../../../images/slide4.jpg'
import '../../stylin/style.css'
import { Link } from 'react-router-dom';

export default function Slide() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide w-100" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slide1} class="d-block w-100" alt="..." style={{height:'500px'}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5 className='text-white p-4 fs-5 animationText'>education for all the technologie  and the different languages of the world</h5>
        <button type="button" className="btn btn-primary"> <Link className="nav-link">Read more</Link></button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={slide2} class="d-block w-100" alt="..." style={{height:'500px'}}/>
      <div class="carousel-caption d-none d-md-block">
      <h5 className='text-white p-4 fs-5 animationText'>education for all the technologie  and the different languages of the world</h5>
        <button type="button" className="btn btn-primary"> <Link className="nav-link">Read more</Link></button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={slide3} class="d-block w-100" alt="..." style={{height:'500px'}}/>
      <div class="carousel-caption d-none d-md-block">
      <h5 className='text-white p-4 fs-5 animationText'>education for all the technologie  and the different languages of the world</h5>
        <button type="button" className="btn btn-primary "> <Link className="nav-link">Read more</Link></button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon bg bg-primary p-4 w-25"  aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon bg bg-primary p-4 w-25 " aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}
