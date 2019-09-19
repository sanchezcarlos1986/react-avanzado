import React, { Fragment, useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <Fragment>
      <RegisterMutation>
        {
          (signup, { _data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              signup({ variables })
                .then(({ data: { signup } }) => activateAuth(signup))
                .catch(err => `Error on signup: ${err}`)
            }

            const errorMgs = error && 'Hubo un problema'

            return (<UserForm error={errorMgs} disabled={loading} title='Sign Up' onSubmit={onSubmit} />)
          }
        }
      </RegisterMutation>

      <LoginMutation>
        {
          (login, { _data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables })
                .then(({ data: { login } }) => activateAuth(login))
                .catch(err => `Error on login: ${err}`)
            }

            const errorMgs = error && 'Hubo un problema'

            return (<UserForm error={errorMgs} disabled={loading} title='Log In' onSubmit={onSubmit} />)
          }
        }
      </LoginMutation>
    </Fragment>
  )
}
