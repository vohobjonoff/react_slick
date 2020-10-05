import React from "react";
import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import { CorouselWrapper, Wrapper} from './style';

/* function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",  }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",   }}
      onClick={onClick}
    />
  );
} */



class SimpleSlider extends React.Component {
  render() {
    var settings = {
      infinite: false,
      arrows: true,
      /* nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />, */
      speed: 500,
      slidesToShow: 7,
      slidesToScroll: 1,
      className: 'notes-slider',
      draggable: true,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
           
          }
        },{
          breakpoint: 500,
          settings: {
            slidesToShow: 3,
            
          }
        }
      ]
    };

   
    return (
      <CorouselWrapper>
      <Slider {...settings}>
        <div>
        <Wrapper>
          <h3><img src="../logo.jpg" alt="logo" /><p>Bizn..</p></h3>
          </Wrapper>
        </div>
        <div><Wrapper>
          <h3><img src="../logo.jpg" alt="logo" /><p>Mar..</p></h3>
          </Wrapper>
          </div>
        <div>
        <Wrapper>
          <h3><img src="../logo.jpg" alt="logo" /></h3>
          </Wrapper>
          </div>
        <div>
        <Wrapper>
          <h3><img src="../logo.jpg" alt="logo" /></h3>
        </Wrapper>
          </div>
        <div>
        <Wrapper>
          <h3><img src="../logo.jpg" alt="logo" /></h3>
          </Wrapper>
          </div>
        <div>
        <Wrapper>
          <h3><img src="../logo.jpg" alt="logo" /></h3>
          </Wrapper>
        </div>
        <div>
        <Wrapper>
          <h3><img src="../logo.jpg" alt="logo" /></h3>
          </Wrapper>
        </div>
          <div>
          <Wrapper>
            <h3><img src="../logo.jpg" alt="logo" /></h3>
            </Wrapper>
          </div>
      </Slider>
      </CorouselWrapper>
    );
  }
}
export default  SimpleSlider;