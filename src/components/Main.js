import React ,{useState}from 'react';

const Main = () => {

    const [username , setUsername] = useState('');
    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPasssword] = useState('');

    const [usernameError , setUsernameError] = useState('');
    const [emailError , setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPassswordError] = useState('');

    const [usernameColor , setUsernameColor] = useState('');
    const [emailColor , setEmailColor] = useState('');
    const [passwordColor, setPasswordColor] = useState('');
    const [confirmPasswordColor, setConfirmPassswordColor] = useState('');




    const validate = () => {
      if(username.length > 8 ) {
        setUsernameError('');
        setUsernameColor('green');
            }else{
                setUsernameError('username must be 8 letters long');
                setUsernameColor('red');
            }
      if(email.includes('@')) {
        setEmailError('');
        setEmailColor('green')
      }else {
        setEmailError('Email should have  "@" ');
        setEmailColor('red');
      }

      if(password.includes('.') && password.length > 8  ) {
        setPasswordError('');
        setPasswordColor('green')
      }else {
        setPasswordError('Password should be 8 letters long and should have "." ');
        setPasswordColor('red');
      }

      if(password !== '' && password === confirmPassword ) {
        setConfirmPassswordError('');
        setConfirmPassswordColor('green')
      }else {
        setConfirmPassswordError('Password not matched');
        setConfirmPassswordColor('red');
      }

    };
    



    return (
        <div>
            <div className='row justify-content-center' >
                <div className='col-md-5 shadow-lg p-3 mb-5 bg-white rounded' >
                  <h1>Form Validation</h1>

                  <input type='text' placeholder='username' className='form-control'
                  value={username}
                  style={{borderColor:usernameColor}}
                  onChange={(e) => setUsername(e.target.value)}
                  />
                  <p>{usernameError}</p>


                  <input type='email' placeholder='email' className='form-control'
                   style={{borderColor:emailColor}}
                   value={email} onChange={(e) => setEmail(e.target.value)}
                  />
<p>{emailError}</p>

                  <input type='password' placeholder='password' className='form-control'
                  style={{borderColor:passwordColor}}
                   value={password} onChange={(e) => setPassword(e.target.value)}
                  />
<p>{passwordError}</p>

                  <input type='password' placeholder='confirm password' className='form-control'
                  style={{borderColor:confirmPasswordColor}}
                   value={confirmPassword} onChange={(e) => setConfirmPasssword(e.target.value)}
                  />
<p>{confirmPasswordError}</p>


                  <button
                   className='btn btn-success' 
                   onClick={validate}
                   >Submit</button>
                </div>

            </div>
        </div>
    )
}

export default Main;
