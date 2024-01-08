import React from 'react'

export const Carousal = () => {
  return (
    <>
    <div className='banner'>
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.ulcdn.net/media/Slideshow/Simplywud-fhs-Slideshow.jpg?1687846379" className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.ulcdn.net/media/Slideshow/Hob-Slideshow.jpg?1690190810" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.ulcdn.net/media/Slideshow/Feast_for_the_eyes_Slideshow.jpg?1693161041" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>
    </>
  )
}
