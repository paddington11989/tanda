import React from "react";
import Slider from "react-slick";
import "./slider.css";
import MiniStarRating from "./ministar";

function AllSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow:3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1190,
        settings: {
          slidesToShow:2.5,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow:2.4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 920,
        settings: {
          slidesToShow:2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow:1.8,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow:1.5,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow:1.3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow:1.1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow:1.03,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow:1.01,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
     

    ]
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="comment-slider-item">
          <div className="slider-item-block">
            <div className="item-avatar"></div>
            <div className="item-name-date">
                <p className="user-name">Сайкал</p>
                <p className="item-date">17 мая 2023, 20:46</p>
            </div>
           <MiniStarRating/>
          </div>
          <p className="slilder-user-text">Отлично шьёт, покупкой довольна.</p>
          <p className="slider-new-user-text">Пожаловаться на отзыв</p>
        </div>

        <div className="comment-slider-item">
        <div className="slider-item-block">
            <div className="item-avatar"></div>
            <div className="item-name-date">
                <p className="user-name">Сайкал</p>
                <p className="item-date">17 мая 2023, 20:46</p>
            </div>
           <MiniStarRating/>
          </div>
          <p className="slilder-user-text">Машинка пришла целая в заводской упаковки. Стирает мелкие вещи, полоскание в ней не очень понравилось и отжим слабый. По сути отжим в ней это просто кружение в этом барабане для отдима.</p>
          <p className="slider-new-user-text">Пожаловаться на отзыв</p>
        </div>


        <div className="comment-slider-item">
        <div className="slider-item-block">
            <div className="item-avatar"></div>
            <div className="item-name-date">
                <p className="user-name">Сайкал</p>
                <p className="item-date">17 мая 2023, 20:46</p>
            </div>
           <MiniStarRating/>
          </div>
          <p className="slilder-user-text">Отлично шьёт, покупкой довольна.</p>
          <p className="slider-new-user-text">Пожаловаться на отзыв</p>
        </div>
        <div className="comment-slider-item">
        <div className="slider-item-block">
            <div className="item-avatar"></div>
            <div className="item-name-date">
                <p className="user-name">Сайкал</p>
                <p className="item-date">17 мая 2023, 20:46</p>
            </div>
           <MiniStarRating/>
          </div>
          <p className="slilder-user-text">Машинка пришла целая в заводской упаковки. Стирает мелкие вещи, полоскание в ней не очень понравилось и отжим слабый. По сути отжим в ней это просто кружение в этом барабане для отдима.</p>
          <p className="slider-new-user-text">Пожаловаться на отзыв</p>
        </div>
        <div className="comment-slider-item">
        <div className="slider-item-block">
            <div className="item-avatar"></div>
            <div className="item-name-date">
                <p className="user-name">Сайкал</p>
                <p className="item-date">17 мая 2023, 20:46</p>
            </div>
           <MiniStarRating/>
          </div>
          <p className="slilder-user-text">Отлично шьёт, покупкой довольна.</p>
          <p className="slider-new-user-text">Пожаловаться на отзыв</p>
        </div>
        
      </Slider>
    </div>
  );
}

export default AllSlider;
