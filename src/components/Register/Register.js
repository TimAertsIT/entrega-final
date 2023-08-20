import { useState } from 'react';
import { StyledBackground, StyledCard, StyledH1, StyledP, StyledInput, StyledButton, StyledForm } from './Register.styles';

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = { email, password, name };
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        setEmail('');
        setPassword('');
        setName('');
    }

    return (
        <>
            <StyledBackground>
                <StyledCard>
                    <StyledH1>Create an account</StyledH1>
                    <StyledP>By creating an account you can keep track of your plants and get personalized tips such as watering and pruning. </StyledP>
                    <StyledForm onSubmit={handleSubmit}>
                        <label>
                            <StyledInput type="email" value={email} placeholder="Email" onChange={e => setEmail(e.target.value)} />
                        </label>
                        <br />
                        <label>
                            <StyledInput type="password" value={password} placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        </label>
                        <br />
                        <label>
                            <StyledInput type="text" value={name} placeholder="Name" onChange={e => setName(e.target.value)} />
                        </label>
                        <br />
                        <StyledButton type="submit" value="Submit">Submit</StyledButton>
                    </StyledForm>
                </StyledCard>
            </StyledBackground>
        </>
    );
}

export default Register;