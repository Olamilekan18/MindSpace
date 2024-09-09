import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../Pages/./Resources.css'


const SimpleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ width: "80%", margin: "0 auto", height: "contain" }}>
      <h2>Daily Affirmations</h2>
      <Slider {...settings}>
        <div>
          <img className='slide-img' src="https://hips.hearstapps.com/hmg-prod/images/marianne-williamson-quote-1621371062.jpg" alt="Slide 1" />
        </div>
        <div>
          <img className='slide-img' src="https://hips.hearstapps.com/hmg-prod/images/oprah-quote-1621368137.jpg" alt="Slide 2" />
        </div>
        <div>
          <img className='slide-img' src="https://www.wondermind.com/wp-content/uploads/2023/07/TK-Daily-Affirmations-for-Whatever-Youre-Going-Through-1.png" alt="Slide 3" />
        </div>
        <div>
          <img className='slide-img' src="https://blog.gratefulness.me/content/images/2022/04/daily-affirmations-list.jpg" alt="Slide 4" />
        </div>
        <div>
          <img className='slide-img' src="https://zannakeithley.com/wp-content/uploads/2021/04/7-min-1-683x1024.png" alt="Slide 4" />
        </div>
        <div>
          <img className='slide-img' src="https://www.wondermind.com/wp-content/uploads/2023/04/V2-1.png?w=960" alt="Slide 4" />
        </div>
        <div>
          <img className='slide-img' src="https://hips.hearstapps.com/hmg-prod/images/25-1610491062.png" alt="Slide 4" />
        </div>
        <div>
          <img className='slide-img' src="https://www.wondermind.com/wp-content/uploads/2023/07/TK-Daily-Affirmations-for-Whatever-Youre-Going-Through-1.png" alt="Slide 4" />
        </div>
      </Slider>
    </div>
  );
};

export default SimpleCarousel;
