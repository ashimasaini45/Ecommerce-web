
import { useState } from 'react'; //react's hook to make state
import{ Box, Button, Typography, styled } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//components
import LoginDialog from '../login/LoginDialog';

const Wrapper = styled(Box)`
    display: flex;
    margin: 0 3% 0 auto;
    gap: 30px;         /* Adds space between items */
    align-items: center; /* Vertically center items */
`;

const Container = styled(Box)`
    display: flex;
    align-item: center;
`;

const LoginButton = styled(Button)`
    color: #B22222;
    background:  #fff ;
    text-transform: none;
    padding: 5px 40px;
    width:5%;
    height: 35px;
    border-radius: 6px;
    box-shadow: none;

`;

const CustomButtons = () =>{

    const[open, setOpen] = useState(false);
    const openDialog = ()=>{
        setOpen(true);
    };

    const closeDialog = () => {
        setOpen(false);  // Use setOpen to close the dialog
      };

    return(
        <Wrapper>
            <LoginButton variant="contained" onClick={openDialog}>login</LoginButton>

            <Typography style={{marginTop: 1,whiteSpace: 'nowrap' }}>Become a seller</Typography>
            <Typography style={{ whiteSpace: 'nowrap' }}>More</Typography>
            
            <Container>
                <ShoppingCartIcon />
                <Typography style={{ marginLeft: 5, whiteSpace: 'nowrap' }}>Cart</Typography>
            </Container>
            <LoginDialog open={open} onClose={closeDialog} />
        </Wrapper>
    );
};

export default CustomButtons;