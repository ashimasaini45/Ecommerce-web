
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { styled } from '@mui/material';
import { bannerData } from '../../constants/data';

const Image= styled('img')({
    width: '100%',
    height: 200
})

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1  //be it large or big screen show only 1 banner
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Banner = () =>{
    return(
        <Carousel  
                    swipeable={false} //prevent sliding by dragging mouse
                    draggable={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    slidesToSlide={1} //how much slides at a time
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                    containerClass="carousel-container"
        >
            {
                bannerData.map(data =>(
                    <Image src={data.url} alt="banner" />
                ))
            }            
        </Carousel>  //need responsive prop->check react-multi-carousel 
    )
}

export default Banner;