// npm modules
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import * as authService from '../../services/authService'

// css
import styles from './ChangePassword.module.css'

const ChangePassword = ({ handleAuthEvt }) => {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    password: '',
    newPassword: '',
    newPasswordConf: '',
  })

  const handleChange = evt => {
    setMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      await authService.changePassword(formData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      setMessage(err.message)
    }
  }

  const { password, newPassword, newPasswordConf } = formData

  const isFormInvalid = () => {
    return !(password && newPassword && newPassword === newPasswordConf)
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Change Password</h1>
      <p className={styles.message}>{message}</p>
      <form autoComplete="off" onSubmit={handleSubmit} className={styles.form}>
        <fieldset>
          <legend>Current Password</legend>
          <input
            type="password"
            value={password}
            name="password"
            onChange={handleChange}
            className={styles.input}
            autoComplete='off'
          />
        </fieldset>
        <fieldset>
          <legend>New Password</legend>
          <input
            type="password"
            value={newPassword}
            name="newPassword"
            onChange={handleChange}
            className={styles.input}
            autoComplete='off'
          />
        </fieldset>
        <fieldset>
          <legend>Confirm New Password</legend>
          <input
            type="password"
            value={newPasswordConf}
            name="newPasswordConf"
            onChange={handleChange}
            className={styles.input}
            autoComplete='off'
          />
        </fieldset>
        <div className={styles.links}>
          <Link to="/">
            <button>
              Cancel
            </button>
          </Link>
          <button className={styles.button} disabled={isFormInvalid()}>
            Change Password
          </button>
        </div>
      </form>
    </main>
  )
}

export default ChangePassword
