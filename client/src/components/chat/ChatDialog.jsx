import { Dialog, Box, styled } from "@mui/material";
import Menu from "./menu/Menu";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";
import { emptyChatImage2 } from "../../constants/data";

const dialogStyle = {
    height: '96%',
    width: '110%',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '20px',
    backgroundColor: 'rgba(17,20,20,0.9)',
    overflow: 'hidden',
    backdropFilter: 'blur(25px)'
}

const Component = styled(Box)`
    display: flex;
`
const LeftComponent = styled(Box)`
    min-width: 350px;
`

const RightComponent = styled(Box)`
    width: 100%;
    min-width: 200px;
    height: 100vh;
    position:relative;
    background-image: url(${emptyChatImage2});
    background-size: 1350px;
`
const ChatDialog = () => {

    const { person } = useContext(AccountContext);

    return (
        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
            maxWidth={'md'}
        >
            <Component>
                <LeftComponent>
                    <Menu />
                </LeftComponent >
                <RightComponent>
                    {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
                </RightComponent>
            </Component>
        </Dialog>
    )

}

export default ChatDialog;