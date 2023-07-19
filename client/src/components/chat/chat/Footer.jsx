import { Box, styled, InputBase } from '@mui/material';
import { useEffect } from 'react';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import MicNoneIcon from '@mui/icons-material/MicNone';
import { uploadFile } from '../../../service/api.js';

const Component = styled(Box)`
    margin-top:5px;
    margin-left:8px;
    height : 44px;
    width: calc(100% - 48px);
    align-items:center;
    border-radius:100px;
    display:flex;
    color: rgba(235,235,235,1);
    background: rgba(23,25,30,0.8);
    backdrop-filter: blur(7px);
    position:relative;
    padding : 0px 15px;
    & > *{
        color: rgba(173,191,196,1);
        font-family: inherit;
        margin:5px;
    }
`
const Type = styled(Box)`
    width : 100%;
    height: 100%;
    border-radius:10px;
    display:flex;
    background: rgba(73,75,80,0);
    align-items:center;
`

const ClipIcon = styled(AttachFileIcon)`
    transform: rotate(40deg);
    cursor:hand;
`

const InputField = styled(InputBase)`
    color: rgba(193,211,216,1);
    width: 100%;
    font-size: 14px;
    height: 15px; 
    padding: 0px 16px; 
`

const Footer = ({ sendText, setValue, value, file, setFile, setImage }) => {

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                let response = await uploadFile(data);
                setImage(response.data);
            }
        }
        getImage();
    }, [file])


    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }

    return (
        <Component>
            <label htmlFor="fileInput">
                <ClipIcon />
            </label>
            <input type="file"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={(e) => onFileChange(e)}
            />
            <Type>
                <InputField
                    placeholder="Type Something ... "
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={(e) => sendText(e)}
                    value={value}
                />
            </Type>
            <SentimentSatisfiedAltIcon />
            <MicNoneIcon />
        </Component>
    )
}

export default Footer;