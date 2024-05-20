import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'

function UserForm() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [emailError, setEmailError] = useState("");
   const [passwordError, setPasswordError] = useState("");

   const handleSubmit = event => {
      event.preventDefault();

      let emailValid = false;

      if (email.length === 0) {
         setEmailError("Email is required.")
      } else if (email.length < 6) {
         setEmailError("Email should be minimum 6 characters")
      } else if (email.indexOf(' ') >= 0) {
         setEmailError("Email can't contain spaces")
      } else {
         setEmailError('')
         emailValid = true;
      }

      if (emailValid) {
         alert(`email: ${email}\npassword:${password}`)
         setEmail("")
         setPassword("")
      }
   }

   return (
      <div>
         <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formBasicEmail'>
               <Form.Label>Email</Form.Label>
               <Form.Control type='email' placeholder='Enter email' onChange={event => setEmail(event.target.value)} value={email} />
               <Form.Text className='text-muted'>
                  We'll never share your email with anyone else.
               </Form.Text>
               {emailError.length > 0 && (
                  <Alert variant='danger'>{emailError}</Alert>
               )}
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
               <Form.Label>Password</Form.Label>
               <Form.Control type='password' placeholder='Enter password' onChange={event => setPassword(event.target.value)} value={password} />
            </Form.Group>

            <Button className='mt-3 mx-1' variant='success' type='submit'>Submit</Button>
         </Form>

         Email: {email}
         <br />
         Password: {password}
      </div>
   )
}

export default UserForm;