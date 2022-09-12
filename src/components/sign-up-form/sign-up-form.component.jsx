import { useState } from "react"

import {createUserWithEmailAndPassword} from '../../utils/firebase/firebase.utils'

const defaultFormFieldS = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [ formFields, setFormFields ] = useState(defaultFormFieldS);
    const { displayName, email, password, confirmPassword } = formFields; 

console.log(formFields);

const handleSubmit = async (event) =>{
    event.preventDefault();

    if(password != confirmPassword) {
        alert('your passwords do not match');
        return;
    };
    try {
        const response = await createUserWithEmailAndPassword(email, password)
        console.log(response);
    } catch (error) {
        console.log('user creaton encountered an error', error);
    }
}

    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Display Name</label>
                <input type="text" required onChange={handleChange} name='displayName' value={displayName}/>

                <label htmlFor="">Email</label>
                <input type="email" required onChange={handleChange} name='email'value={email}/>

                <label htmlFor="">Password</label>
                <input type="password" required onChange={handleChange} name='password'value={password}/>

                <label htmlFor="">Confim Password</label>
                <input type="password" required onChange={handleChange} name='confirmPassword'value={confirmPassword}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm