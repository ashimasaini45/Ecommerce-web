

import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchContainer = styled(Box)`
    background: #fff;
    width:30%;
    height: 35px;
    border-radius: 6px;
    margin-left: 5px;
    display: flex;
    align-items: center;   /* Vertically center input and icon */
`;

const InputSearchBase = styled(InputBase)`
    padding-left: 40px;
    width: 100;
    font-size: 15px;
    color:#4B2E2E;
    flex-grow: 1;  /* Take up remaining space */
`;

const SearchIconwrapper = styled(Box)`
    color: #D2691E;
    padding: 5px;
    margin-left:0px;
    align-items: center;
    justify-content: center;
`;
    

const Search = () =>{
    return(
        <SearchContainer>
             <InputSearchBase 
                placeholder="Search your favourite food or restaurant" 
             />
             <SearchIconwrapper>
                <SearchIcon />
             </SearchIconwrapper>
        </SearchContainer>
    );
};

export default Search;