import React from 'react'
import { Outlet } from 'react-router-dom'
import ClientFooter from './ClientFooter'
import ClientHeader from './ClientHeader'

const ClientLayout = () => {
  return (
    <>
    <ClientHeader/>
    <Outlet/>
    </>
  )
}

export default ClientLayout