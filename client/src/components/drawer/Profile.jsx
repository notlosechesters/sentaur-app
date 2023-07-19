import { Box, styled, Typography } from '@mui/material';

import { useContext } from 'react';

import { AccountContext } from '../../context/AccountProvider';

import ExpandBox from './ExpandBox';

const Component = styled(Box)`
    display: flex;
    align-items: center;
`
const Image = styled('img')(
    {
        width: 55,
        height: 55,
        padding: '10px',
        borderRadius: '50%',
    }
)

const Icon = styled(Box)`
    margin-left:auto;
    padding-right:15px;
    color: #99abb0;
    display: flex;
    align-items:center;
`;

const Boxwrapper = styled(Box)`
    padding: 10px 0px;  
    & :first-child{
        color: #99abb0;
        font-family: inherit;
        font-size: 18px;
    }
    & :last-child{
        font-size: 12px;
        color:#676b68;
        font-family: Ebrima;
    }
`

const Profile = () => {

    const { account } = useContext(AccountContext);
    const firstName = account.name.split(' ')[0];
    const remainingName = account.name.slice(firstName.length + 1);

    return (
        <Component>
            <Image src={account.picture} alt="dp" />
            <Boxwrapper>
                <Typography>
                    {firstName}
                </Typography>
                <Typography>
                    {remainingName}
                </Typography>
            </Boxwrapper>
            <Icon>
                <ExpandBox />
            </Icon>
        </Component>
    )
}

export default Profile;