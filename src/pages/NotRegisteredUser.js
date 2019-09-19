import React, { Fragment } from 'react'
import Context from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
      ({ activateAuth }) => {
        return (
          <Fragment>
            <RegisterMutation>
              {
                (signup, { data, loading, error }) => {
                  const onSubmit = ({ email, password }) => {
                    const input = { email, password }
                    const variables = { input }
                    signup({ variables })
                      .then(activateAuth)
                      .catch(err => `Error on registering: ${err}`)
                  }

                  const errorMgs = error && 'Hubo un problema'

                  return (<UserForm error={errorMgs} disabled={loading} title='Sign Up' onSubmit={onSubmit} />)
                }
              }
            </RegisterMutation>
            <hr />
            <UserForm title='Log In' onSubmit={activateAuth} />
          </Fragment>
        )
      }
    }
  </Context.Consumer>
)
