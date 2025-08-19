import Link from 'next/link'
import React from 'react'
import { NavLink } from 'react-bootstrap'

const UserMenu = () => {
  return (
    <div>
        <NavLink href="/api/auth/signin" alt="Login" as={Link}>Login</NavLink>
    </div>
  )
}

export default UserMenu