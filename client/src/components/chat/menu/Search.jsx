import { Box, styled } from '@mui/system';
import { InputBase } from '@mui/material';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../drawer/InfoDrawer';

import { useState } from 'react';

const Component = styled(Box)`
    Background:rgba(17,20,20,0);
    height: 45px;
    display: flex;
    align-items:center;
    width: 100%;
    padding: 5px 12px 10px 0px;
`;

const Wrapper = styled(Box)`
    background-color: #1f2324;
    position: relative;
    width:100%;
    border-radius:5px;
    display: flex;
    height:30px;
`;

const Icon = styled(Box)`
    height:100%;
    padding: 4px;
    color: #99abb0;

`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 16px;
    font-size: 14px;
    height: 15px;
    color: #fff;    
`;

const Search = ({ setText }) => {

    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <Component>
                <Wrapper>
                    <InputField
                        placeholder="Search"
                        onChange={(e) => setText(e.target.value)}
                    />
                    <Icon>
                        <HeaderMenu
                            fontSize="small"
                            setOpenDrawer={setOpenDrawer}

                        />
                    </Icon>
                </Wrapper>
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    )
}

export default Search;