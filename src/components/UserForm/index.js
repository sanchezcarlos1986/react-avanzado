import React, { Fragment } from 'react'
import { userInputValue } from '../../hooks/userInputValue'
import { Form, Input, Title, Error } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = userInputValue('')
  const password = userInputValue('')

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} required type='email' placeholder='Email' {...email} />
        <Input disabled={disabled} required type='password' placeholder='Password' {...password} />
        <SubmitButton disabled={disabled}>{disabled ? 'Loading...' : title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  )
}
