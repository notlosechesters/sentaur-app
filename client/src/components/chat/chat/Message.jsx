import { Box, Typography, styled } from '@mui/material';
import { formatDate, downloadMedia } from '../../../utils/common-utils';
import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { iconPDF } from '../../../constants/data';
import { GetApp as GetAppIcon } from '@mui/icons-material';

const ImageStyle = styled('img')(
    {
        width: 200,
        height: '100%',
        objectFit: 'cover',
        borderRadius: '8px',
        marginLeft: '-10px',
        marginRight: '-10px',
    }
)


const Own = styled(Box)`
    background: rgba(40,160,120,1);
    max-width:60%;
    padding:2px 12px;
    margin:2px;
    margin-left:auto;
    margin-right:10px;
    width:fit-content;
    display:flex;
    border-radius: 10px;
    color:rgba(255,255,255,1);
    font-family:Helvetica;
    font-weight:lighter;
    word-break: break-word;
`
const Received = styled(Box)`
    background: rgba(60,160,200,1);
    max-width:60%;
    padding:2px 12px;
    margin:2px;
    margin-left:10px;
    width:fit-content;
    display:flex;
    border-radius: 10px;
    color:rgba(255,255,255,1);
    font-family:Ebrima;
    font-weight:lighter;
    word-break: break-word;
`

const Text = styled(Typography)`
    padding: 0px 10px 0px 0px;
`

const Time = styled(Typography)`
    font-size: 12px;
    color: rgba(125,255,255,1);
    word-break: keep-all;
    align-self: flex-end;
`



export const Message = ({ message }) => {

    const { account } = useContext(AccountContext);



    return (
        <>
            {
                account.sub === message.senderId ?
                    <Own>
                        {
                            message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                        }

                    </Own>
                    :
                    <Received>
                        {
                            message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                        }

                    </Received>
            }

        </>
    )
}


const ImageMessage = ({ message }) => {
    return (
        <Box style={{ position: 'relative' }}>

            {
                message?.text?.includes('.pdf') ?
                    <Box style={{ display: 'flex' }}>
                        <img src={iconPDF} alt="pdf" style={{ width: 80 }} />
                        <Typography style={{ fontSize: 14 }}>{message.text.split('/').pop()}</Typography>
                        <Time>
                            <GetAppIcon
                                onClick={(e) => downloadMedia(e, message.text)}
                                fontSize='small'
                                style={{ marginRight: 10, marginBottom: -3, cursor: 'hand' }}
                            />{formatDate(message.createdAt)}</Time>
                    </Box>

                    :
                    <>
                        <Time style={{
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            position: 'absolute',
                            top: '1%',
                            left: '92.3%',
                            transform: 'translate(-50%, 0%)',
                            borderRadius: '7px',
                            padding: '2px 6px',
                            backdropFilter: 'blur(6px)',
                        }}>{formatDate(message.createdAt)}</Time>
                        <ImageStyle src={message.text} alt={message.text} />
                    </>
            }
        </Box>
    )
}

const TextMessage = ({ message }) => {
    return (
        <>
            <Text>{message.text}</Text>
            <Time>{formatDate(message.createdAt)}</Time>
        </>
    )
}

export default Message;