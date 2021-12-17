import "./carousel.css";

import React, { useEffect, useState } from 'react'

function Carousel() {
  const images = [
    {
      id: 1,
      url: `https://randomfox.ca/images/1.jpg`,
    },
    {
      id: 2,
      url: `https://randomfox.ca/images/2.jpg`,
    },
    {
      id: 3,
      url: `https://randomfox.ca/images/3.jpg`,
    },
    {
      id: 4,
      url: `https://randomfox.ca/images/4.jpg`,
    },
    {
      id: 5,
      url: `https://randomfox.ca/images/5.jpg`,
    },
  ];

  useEffect(() => {
    // do someting here
  }, [])
  
  const [mainIndex, setMainIndex] = useState(0);
  const [mainUrl, setMainUrl] = useState(images[0].url);

  const showImage = (idx) => {
    return idx === mainIndex ? 'carousel-container__img' : 'hidden'
  }
  
  const handleLeftArrow = (e) => {
    let idx = mainIndex === 0 ? images.length - 1 : mainIndex - 1;
    setMainIndex(idx)
    setMainUrl(images[idx].url)
    console.log(mainIndex)
  }
  
  const handleRightArrow = (e) => {
    let idx = mainIndex === images.length - 1 ? 0 : mainIndex + 1;
    setMainIndex(idx)
    setMainUrl(images[idx].url)
    console.log(mainIndex)
  }
  

  return (
    <div className="carousel">
      <div className="carousel-container">
        {images.map((image, idx) => (
          <img
            className={showImage(idx)}
            key={idx}
            src={mainUrl}
            alt="" />
        ))}
      </div>
      <button onClick={handleLeftArrow} className="carousel-arrow left">
        {"<"}
      </button>
      <button onClick={handleRightArrow} className="carousel-arrow right">
        {">"}
      </button>
    </div>
  );
}

export { Carousel };