import { Fragment } from 'react';  //it doesnt create extra node

//component
import Nav from './Nav';
import Banner from './Banner';
import { Box, styled } from '@mui/material'; //to color carousels background

const Component = styled(Box)`
    padding:10px;
    background: #f2f2f2;
`

const Home = () =>{
    return(
        <Fragment>
            <Nav   />
            <Component>
                  <Banner />
            </Component>
        </Fragment>    //can leave empty angle brackets instead of fragment
    ); 
}

export default Home;