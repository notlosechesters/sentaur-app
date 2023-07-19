import { useState } from 'react';
import { Box, styled } from "@mui/system";


//components
import Header from "./Header";
import Search from "./Search";
import Conversations from "./Conversations";


const Component = styled(Box)`
    display: flex;
`

const Menu = () => {

    const [text, setText] = useState('');

    return (
        <Box>
            <Component>
                <Header />
                <Search setText={setText} />
            </Component>
            <Conversations text={text} />
        </Box>
    )
}

export default Menu;