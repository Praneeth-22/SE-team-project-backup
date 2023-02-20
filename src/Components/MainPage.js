import React from 'react'
import Header from './Header'
import Home from './Home'
import styled from 'styled-components'

function MainPage() {
  return (
    <Container>
      <Header/>
    <Home/>   
    </Container>
  )
}
const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
  
  `

export default MainPage
