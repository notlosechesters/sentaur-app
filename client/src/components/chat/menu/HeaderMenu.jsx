import { useState } from 'react';
import { Create } from '@mui/icons-material';
import { Menu, MenuItem, styled, Box } from '@mui/material';
import { Chat as ChatIcon } from '@mui/icons-material';
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import PersonIcon from '@mui/icons-material/Person';

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
        background-color: rgba(31,35,36,1);
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

const HeaderMenu = ({ setOpenDrawer }) => {

    const [open, setOpen] = useState(null);
    const handleClose = () => {
        setOpen(null);
    }

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    return (
        <>
            <Create
                fontSize="small"
                onClick={handleClick}
                style={{ cursor: 'hand' }}
            />
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

                <MenuOption onClick={() => { handleClose(); setOpenDrawer(true); }}>
                    <Icon>
                        <PersonIcon fontSize="small" />
                    </Icon>

                    Profile

                </MenuOption>

                <MenuOption onClick={handleClose}>
                    <Icon>
                        <ChatIcon fontSize="small" />
                    </Icon>

                    New Chat

                </MenuOption>

                <MenuOption onClick={handleClose}>
                    <Icon>
                        <FilterAltIcon fontSize="small" />
                    </Icon>

                    Filter Chats

                </MenuOption>

                <MenuOption onClick={handleClose}>
                    <Icon>
                        <SortIcon fontSize="small" />
                    </Icon>

                    Sort Chats

                </MenuOption>

            </CustomMenu>
        </>
    )
}

export default HeaderMenu;