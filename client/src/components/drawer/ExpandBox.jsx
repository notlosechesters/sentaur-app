import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { useState } from 'react';
import { Menu, MenuItem, styled, Box } from '@mui/material';

const MenuOption = styled(MenuItem)`
    font-size:14px;
    margin-right: auto;
    padding: 0px 20px 0px 10px;
    color: #4A4A4A;
    font-family: inherit;
    &:hover {
        background-color: #2c3233;
        color: white;
    }
`

const CustomMenu = styled(Menu)`
    & .MuiPaper-root {
        background-color: #1f2324;
    }
    & .MuiMenuItem-root {
        color: #fff;
    }
`;

const Icon = styled(Box)`
    padding: 4px 10px 4px 0px;
    color: #99abb0;
    display: flex;
    align-items:center;
`;


const ExpandBox = () => {

    const [open, setOpen] = useState(null);
    const handleClose = () => {
        setOpen(null);
    }

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    return (
        <>
            <ExpandMoreIcon onClick={handleClick} />
            <CustomMenu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}

                getContentAnchorE1={null}
                anchorOrigin={{
                    vertical: 32,
                    horizontal: 24,
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}>

                <MenuOption onClick={handleClose}>
                    <Icon>
                        <AccountCircleIcon fontSize="small" />
                    </Icon>

                    Account Settings

                </MenuOption>

            </CustomMenu>
        </>

    )
}

export default ExpandBox;