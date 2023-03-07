import React, { useState } from 'react'
import { Input, Label, Button } from 'reactstrap'
import './SignupPage.css'

const SignupPage = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nationality, setNationality] = useState('en')
  const [passwordStrength, setPasswordStrength] = useState('')


  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value
    setPassword(newPassword)

    if (newPassword.length === 0) {
      setPasswordStrength('')
    } else if (newPassword.length < 8) {
      setPasswordStrength('weak')
    } else {
      setPasswordStrength('strong')
    }
  }

  const handleNationalityChange = (event) => {
    setNationality(event.target.value)
  }

  const isEmailValid = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const isPasswordStrong = (password) => {
    return password.length >= 8;
  }

  const getGreeting = (nationality) => {
    switch (nationality) {
      case 'en':
        return 'Hello';
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      case 'es' :
        return 'Hola';
      case 'kr':
        return '안녕하세요';
      default:
        return 'Hello';
    }
  };

  const greeting = getGreeting(nationality)
  const isEmailValidClass = isEmailValid(email) ? 'is-valid' : 'is-invalid'
  const isPasswordStrongClass = password.length > 0 ? (isPasswordStrong(password) ? 'is-valid' : 'is-invalid') : ''

  const passwordMessage = passwordStrength === 'strong' ? 'Your password is strong' : (passwordStrength === 'weak' ? 'Your password is too weak' : '')
  const emailMessage = email.length > 0 ? (isEmailValidClass === 'is-valid' ? 'Valid email' : 'Email is not valid') : ''

  return (
    <div className='SignupPage'>
      <form action='' method='get'>
      
      <Label htmlFor="email">Email:</Label>
      <Input
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        className={isEmailValidClass} />
          <div className="invalid-feedback">
            {emailMessage}
          </div>
          <div className="valid-feedback">
            {emailMessage}
          </div>

      <Label htmlFor="password">Password:</Label>
      <Input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        className={isPasswordStrongClass} />
          <div className="invalid-feedback">
            {passwordMessage}
          </div>
          <div className="valid-feedback">
            {passwordMessage}
          </div>


      <Label htmlFor="nationality">Nationality:</Label>
      <Input type='select' id="nationality" value={nationality} onChange={handleNationalityChange}>
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="kr">Korean</option>
      </Input>

        <Button type='submit' className='formbutton'>Sign up</Button>
      </form>
      
      <p>{greeting}</p>
      <p>Your email is {email}</p>

    </div>
  )
}

export default SignupPage