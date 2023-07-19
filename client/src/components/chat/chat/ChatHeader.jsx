import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider';

import { Box, Typography, styled } from '@mui/material';
import { Search, MoreHoriz } from '@mui/icons-material';

const Component = styled(Box)`
    margin-top:10px;
    margin-left:8px;
    height : 44px;
    width: calc(100% - 48px);
    align-items:center;
    border-radius:10px;
    display:flex;
    color: rgba(235,235,235,1);
    background: rgba(53,55,60,0.4);
    backdrop-filter: blur(9px);
    padding : 8px 16px 8px 16px;
`
const Image = styled('img')(
    {
        height: '40px',
        width: '40px',
        borderRadius: '50px',
        fontFamily: 'inherit',
        fontWeight: '4px',
        marginRight: '16px',
        marginLeft: '-5px',
    }
)

const Name = styled(Typography)`

`

const OnlineStatus = styled(Typography)`
    font-size: 12px;
    font-weight: 100;
    color: rgba(200,200,200,0.8);
`

const RighComponent = styled(Box)`
    margin-left:auto;
    & > svg{
        padding: 8px;
        font-size:22px;
    }
`

const ChatHeader = ({ person }) => {

    const { activeUsers } = useContext(AccountContext);

    return (
        <Component>
            <Image src={person.picture} alt='dp' />
            <Box>
                <Name>
                    {person.name}
                </Name>
                <OnlineStatus>
                    {activeUsers?.find(user => user.sub === person.sub) ? 'Online🌕' : 'Offline🌑'}
                </OnlineStatus>
            </Box>
            <RighComponent>
                <Search fontSize="small" />
                <MoreHoriz fontSize="small" />
            </RighComponent>
        </Component>
    )
}

export default ChatHeader;