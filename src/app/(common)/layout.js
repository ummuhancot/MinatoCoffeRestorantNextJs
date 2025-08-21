import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '@/components/header'
import Footer from '@/components/footer'
import UserMenu from '@/components/user-menu'



const Layout = ({children}) => {
  return (
    <div>
      <Container className="sunny">
        <Header>
          <UserMenu/>
        </Header>
      </Container>

      <Container>{children}</Container>

      <Container
        className="night"
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Footer />
      </Container>
    </div>
  );
}

export default Layout