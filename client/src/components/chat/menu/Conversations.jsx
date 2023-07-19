import { useEffect, useState, useContext } from 'react';

import { getUsers } from '../../../service/api';

import { Box, styled } from '@mui/material';

import Conversation from './Conversation';

import { AccountContext } from '../../../context/AccountProvider';


const Component = styled(Box)`
    height: 81vh;
    overflow: auto;
    ::-webkit-scrollbar {
        width: 6px;
      }
      ::-webkit-scrollbar-track {
        background: rgba(70,70,70,0.7);
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb {
        background: rgba(30,30,20,0.8);
        border-radius: 10px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
`;

const Conversations = ({ text }) => {

    const [users, setUsers] = useState([]);

    const { account, socket, setActiveUsers } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            const filteredData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
        }
        fetchData();
    }, [text]);

    useEffect(() => {
        socket.current.emit('addUsers', account);
        socket.current.on("getUsers", users => {
            setActiveUsers(users);
        })
    }, [account])

    return (
        <Component>
            {
                users.map(user => (
                    user.sub !== account.sub &&
                    <>
                        <Conversation user={user} />
                    </>
                ))
            }
        </Component>
    )
}

export default Conversations;