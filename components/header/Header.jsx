import React from 'react';

import { AppBar, Toolbar, Box, Typography, styled } from '@mui/material';
    
import Search from './Search';
import CustomButtons from './CustomButtons';
 
const StyledHeader = styled(AppBar)`
    background-color: #D4B895; 
    height: 55px;
 `;

const Component = styled(Box)`
    margin-left: 10%;
    line-height: 0;
`;    

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`;

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
});

const CustomButtonWrapper = styled(Box)`
    margin: 0 5% 0 auto;
`;

const Header = () =>{
    const logoUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';


    return(
        <StyledHeader position="static">
            <Toolbar style={{minHeight: 57}}>
             <Component display="flex">
               <Box>
                <img src={logoUrl} alt="logo" style={{ width: 75 }} />
                    <Box style={{display:"flex"}} >{/* Add margin between the image and text */}
                        <SubHeading variant="subtitle1" style={{ lineHeight: 0.5 }}>Explore 
                            <Box component="span" style={{color: '#8A1716'}}>Plus</Box>
                        </SubHeading>
                        <PlusImage src={subUrl} alt="sub-logo"/>
                    </Box>
                </Box>
            </Component>
            <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyledHeader>

    );
}

export default Header;