import { auth } from '@/auth'
import Link from 'next/link'
import React from 'react'
import { NavLink } from 'react-bootstrap'

const UserMenu = async () => {

  const session = await auth();


  return (
    <div>
      {!!session ? (
        <div>
          <NavLink
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              backgroundColor: "rgba(206, 246, 247, 0.6)",
              padding: "16px 32px",
              color: "black",
              position: "relative",
              zIndex: 1,
              fontSize: "1rem",
              maxWidth: "90%",
              boxShadow: "0 4px 20px rgba(140, 113, 61, 0.28)",
              fontWeight: "600",
              margin: "2px ",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "2px solid rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s ease, transform 0.3s ease",
              fontFamily: "Rock Salt",
            }}
            href="/dashboard"
            alt="Dashboard"
            as={Link}
          >
            Dashboard
          </NavLink>

          <NavLink
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
              backgroundColor: "rgba(206, 246, 247, 0.6)",
              padding: "16px 32px",
              color: "black",
              position: "relative",
              zIndex: 1,
              fontSize: "1rem",
              maxWidth: "90%",
              boxShadow: "0 4px 20px rgba(140, 113, 61, 0.28)",
              fontWeight: "600",
              margin: "2px ",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "2px solid rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s ease, transform 0.3s ease",
              fontFamily: "Rock Salt",
            }}
            href="/api/auth/signout"
            alt="Signout"
            as={Link}
          >
            Logout
          </NavLink>
        </div>
      ) : (
        <NavLink
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
            backgroundColor: "rgba(206, 246, 247, 0.6)",
            padding: "16px 32px",
            color: "black",
            position: "relative",
            zIndex: 1,
            fontSize: "1rem",
            maxWidth: "90%",
            boxShadow: "0 4px 20px rgba(140, 113, 61, 0.28)",
            fontWeight: "600",
            margin: "2px ",
            textTransform: "uppercase",
            textDecoration: "none",
            border: "2px solid rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease, transform 0.3s ease",
            fontFamily: "Rock Salt",
          }}
          href="/api/auth/signin"
          alt="Login"
          as={Link}
        >
          Login 
        </NavLink>
      )}
    </div>
  );
}

export default UserMenu