import React, {useState} from 'react';
import axios from 'axios';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContextProvider';
import { Stack,InputGroup,InputLeftElement,Input,InputRightElement,Button,Flex} from '@chakra-ui/react';
import {EmailIcon} from '@chakra-ui/icons'
import { loginFailure, loginRequest, loginSuccess } from './actionCreater';

 function  Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {state, dispatch} = useContext(AppContext);
    const navigate = useNavigate();

    // password button input functionality
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            email,
            password
        }

        dispatch(loginRequest());
        
        axios.post("https://reqres.in/api/login", payload).then((res) => {
            console.log(res.data)
            dispatch(loginSuccess(res.data.token))
            navigate("/Home");
        }).catch((err) => {
            dispatch(loginFailure())
        })
    }

    if(state.isLoading){
        return <h1>...Loading</h1>
    }

    if(state.isError){
        return <h1>Error...</h1>
    }


    return (
        <>
        <Stack spacing={4}>
            <InputGroup>
                <InputLeftElement
                pointerEvents='none'
                children={<EmailIcon color='gray.300' />}
                />
                <Input type='email' placeholder='Enter Email' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
            </InputGroup>
            <InputGroup size='md'>
                    <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
            <Flex>
                <Button onClick={handleSubmit}>LogIn</Button>
            </Flex>
    </Stack>
    </>
    )

}

export default Login;