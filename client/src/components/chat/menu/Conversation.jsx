import { Box, Typography, styled } from '@mui/material';
import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider.jsx';
import { setConversation } from '../../../service/api.js';

const Component = styled(Box)`
    display:flex;
    height: 45px;
    padding: 10px 0px;
    cursor: pointer;
`

const Text = styled(Typography)`
    color: rgba(200,200,200,1);

    font-weight: lighter;
`

const ImageBox = styled(Box)`
    width:68px;
    align-items: center;
`

const Image = styled('img')(
    {
        width: 40,
        borderRadius: '50%',
        padding: '0px 14px',
    }
)

const Conversation = ({ user }) => {

    const { setPerson, account } = useContext(AccountContext);

    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderId: account.sub, receiverId: user.sub })
    }

    return (
        <Component onClick={() => getUser()}>
            <ImageBox>
                <Image src={user.picture} alt="dp" />
            </ImageBox>
            <Box>
                <Box>
                    <Text>
                        {user.name}
                    </Text>
                </Box>
            </Box>
        </Component>
    )
}

export default Conversation;