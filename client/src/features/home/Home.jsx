import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../assets/1317120.jpeg'
import ExampleCarouselImage1 from '../../assets/wallpaper1.jpg'
import ExampleCarouselImage2 from '../../assets/wallpaper2.jpg'
import ExampleCarouselImage3 from '../../assets/wallpaper3.jpg'

function Home() {
  return (
    <Carousel className="banner">
      <Carousel.Item className='banner-item'>
        <img
          src={ExampleCarouselImage}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='banner-item'>
        <img
          src={ExampleCarouselImage1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='banner-item'>
        <img
          src={ExampleCarouselImage2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='banner-item'>
        <img
          src={ExampleCarouselImage3}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Home;