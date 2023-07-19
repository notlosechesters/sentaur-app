import { Dialog, Box, Typography, styled } from "@mui/material";

import { useContext } from "react";

import { SentaurIcon } from "../../constants/data";

import { AccountContext } from "../../context/AccountProvider";

import { GoogleLogin } from '@react-oauth/google';

import jwt_decode from 'jwt-decode';

import { addUser } from "../../service/api";
//import { List, ListItem } from "@mui/material";

const dialogStyle = {
    height: '96%',
    marginTop: '12%',
    width: '60%',
    borderRadius: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    elevation: 5,
    overflow: 'hidden',
    backgroundColor: 'rgba(10,15,17,0.75)',
    backdropFilter: 'blur(10px)'
}

const Title = styled(Typography)`
    font-size: 86px;
    color: #fff;
    font-weight: 300;
    font-family: inherit;
    margin-bottom: 25px;
`

// const Component = styled(Box)`
//     display: flex;
// `

const Container = styled(Box)`
    width:100;
    padding : 30px 0px 0px 0px;
    text-align:center;
`
const Logo = styled('img')(
    {
        height: 664,
        width: 664,
        margin: '-130px 0 0 0px'
    }
)

// const StyledList = styled(List)`
//     &>li {
//         padding:0;
//         margin-top:15px;
//         font-size: 16px;
//         line-height: 28px;
//         color: #4a4a4a
//     }
// `

const LoginDialog = () => {

    const { setAccount } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        const decoded = jwt_decode(res.credential);
        setAccount(decoded);
        await addUser(decoded);
    }

    const onLoginError = (res) => {
        console.log("Login Failed", res);
    }

    return (
        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop
        >
            <Container >
                <Title >Welcome To Sentaur</Title>
                <Logo src={SentaurIcon} alt="Sentaur Icon" />
                <Box style={{ position: 'absolute', top: '75%', transform: 'translateX(145%)' }}>
                    <GoogleLogin
                        onSuccess={onLoginSuccess}
                        onError={onLoginError}
                    />
                </Box>
            </Container>
        </Dialog>
    )
}

export default LoginDialog;