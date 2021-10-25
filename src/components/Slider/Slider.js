import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImage1 from "../../images/cerosel-1.jpg";
import sliderImage2 from "../../images/cerosel-2.jpg";
import sliderImage3 from "../../images/cerosel-3.jpg";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={sliderImage1} alt="First slide" />
        <Carousel.Caption>
          <h3>
            “Music gives a soul to the universe, wings to the mind, flight to
            the imagination and life to everything.”
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className="d-block w-100" src={sliderImage2} alt="Second slide" />
        <Carousel.Caption>
          <h3>
            “If one should desire to know whether a kingdom is well governed, if
            its morals are good or bad, the quality of its music will furnish
            the answer.”
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sliderImage3} alt="Third slide" />
        <Carousel.Caption>
          <h3>
            “If I had my life to live over again, I would have made a rule to
            read some poetry and listen to some music at least once every week.”
          </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
