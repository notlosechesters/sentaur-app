import { MenuItem } from "@mui/material";
import { Drawer, Box, styled } from "@mui/material";
import Profile from "./Profile";


const drawerStyle = {
    left: 32,
    top: 16.2,
    height: '95.9%',
    width: '17.5%',
    backgroundColor: 'rgba(10, 14, 18, 0.6)',
    elevation: 0,
    borderRadius: '20px',
    minWidth: '250px',
    backdropFilter: 'blur(6px)'
}

const MenuOptions = styled(MenuItem)`
    color:#99abb0;
    font-family: inherit;
    font-weight: 1;
    font-size:14px;
    &:hover {
        background-color: #293237;
        border-radius: 8px;
    }
`

const Component = styled(Box)`
    height:auto;
`

const MenuBox = styled(Box)`
border-top: 1px solid #2e3738;
`

const InfoDrawer = ({ open, setOpen }) => {

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyle }}
            style={{ zIndex: 1300 }}
            BackdropProps={{ sx: { backgroundColor: 'rgba(0, 0, 0, 0.01)' } }}
        >
            <Component>
                <Profile />
            </Component>
            <MenuBox>
                <MenuOptions>
                    Saved Chats
                </MenuOptions>
                <MenuOptions>
                    Contacts
                </MenuOptions>
                <MenuOptions>
                    About Sentaur
                </MenuOptions>
            </MenuBox>
        </Drawer>
    )
}

export default InfoDrawer;