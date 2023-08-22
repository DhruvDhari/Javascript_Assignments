import React from 'react'
import { Register } from '../components/Register'
import { Typography } from '@mui/material'
import { Login } from '../components/Login'

export const UserPage = () => {
  return (
    <div>
        <Typography variant='h1' >Register</Typography>
        {/* <Register/> */}
        <Login/>
    </div>
  )
}
