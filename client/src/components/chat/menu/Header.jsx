import { Box, styled } from "@mui/system";
import { useContext, useState } from "react";


import { AccountContext } from "../../../context/AccountProvider";
import InfoDrawer from "../../drawer/InfoDrawer";

const Image = styled('img')(
    {
        height: 25,
        width: 25,
        borderRadius: '50%',
    }
)


const Component = styled(Box)`
    height:30px;
    background: rgba(17,20,20,0);
    padding: 15px 10px 10px 15px;   
    display: flex; 
`

const Header = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const { account } = useContext(AccountContext);

    const toggleDrawer = () => {
        setOpenDrawer(true);
    }

    return (
        <>
            <Component>
                <Image src={account.picture} alt="dp" onClick={() => toggleDrawer()} />
            </Component>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    )
}

export default Header;