import React, { Fragment } from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <Fragment>
            <RegisterMutation>
              {
                (signup, { _data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    signup({ variables })
                      .then(activateAuth)
                      .catch(err => `Error on signup: ${err}`)
                  }

                  const errorMgs = error && 'Hubo un problema'

                  return (<UserForm error={errorMgs} disabled={loading} title='Sign Up' onSubmit={onSubmit} />)
                }
              }
            </RegisterMutation>
            <hr />
            <LoginMutation>
              {
                (login, { _data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    login({ variables })
                      .then(activateAuth)
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
    }
  </Context.Consumer>
)
