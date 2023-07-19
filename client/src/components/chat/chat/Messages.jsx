import { Box, styled } from "@mui/material";
import Footer from "./Footer";
import Message from "./Message";
import { useContext, useState, useEffect } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getMessages, newMessage } from "../../../service/api";

const Component = styled(Box)`
    display:flex;
    flex-direction: column-reverse;
    margin-top:0px;
    height: 80vh;
    overflow-y:scroll;
    ::-webkit-scrollbar {
        width: 6px;
    }
    ::-webkit-scrollbar-track {
        background: rgba(30,30,20,0.4);
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
        background: rgba(100,100,1  20,1 );
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }    
`
const Messages = ({ person, conversation }) => {

    const [value, setValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);

    const [file, setFile] = useState();
    const [image, setImage] = useState('');



    const { account } = useContext(AccountContext);


    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessages(conversation._id);
            setMessages(data.reverse());
        }
        conversation._id && getMessageDetails();
    }, [person._id, conversation._id, newMessageFlag])


    const receiverId = conversation?.members?.find(member => member !== account.sub);

    const sendText = async (e) => {
        const code = e.keyCode || e.which;
        if (!value) return;

        if (code === 13) {
            let message = {};
            if (!file) {
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'text',
                    text: value,
                }
            } else {
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'file',
                    text: image,
                }
            }

            await newMessage(message);

            setValue('');
            setFile('');
            setImage('');
            setNewMessageFlag(prev => !prev)
        }
    }


    return (
        <>
            <Component>
                {
                    messages && messages.map(message => (
                        <Message message={message}
                        />
                    ))
                }
            </Component>
            <Footer
                sendText={sendText}
                setValue={setValue}
                value={value}
                file={file}
                setFile={setFile}
                setImage={setImage}
            />
        </>
    )
}

export default Messages;