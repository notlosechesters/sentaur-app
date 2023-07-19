import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider.jsx';
import { Box } from '@mui/material';
import ChatHeader from './ChatHeader.jsx';
import Messages from './Messages.jsx';
import { getConversation } from '../../../service/api.js';
import { useEffect, useState } from 'react';

const ChatBox = () => {

    const { person, account } = useContext(AccountContext);

    const [conversation, setConversation] = useState({});

    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
            setConversation(data);
        }

        getConversationDetails();

    }, [person.sub]);

    return (
        <Box>
            <ChatHeader person={person} />
            <Messages
                person={person}
                conversation={conversation}
            />
        </Box>
    )
}

export default ChatBox;