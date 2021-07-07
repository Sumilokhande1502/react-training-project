
let carousel1='carousel1.jpg';
let carousel2='carousel2.png';
let carousel4='carousel4.jpg';

export function Carousel(){
    return(
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{height: "30em"}} src={carousel1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img  style={{height: "30em"}} src={carousel2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img style={{height: "30em"}} src={carousel4} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img style={{height: "30em"}} src="https://images.unsplash.com/photo-1469533667357-006056eaf780?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTR8fGNha2V8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" class="d-block w-100" alt="..." />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    )
}