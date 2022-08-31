import React from 'react'
import styled from "styled-components"
import DropInput from './DropInput'

const DropComp = () => {

    const onFileChange = (files) => {
        console.log(files)
    }

  return (
    <Container>
        <Wrapper>
            <Title>React Drop files Input</Title>
            <DropInput 
           onFileChange={(e)=>{
            onFileChange(e)
           }}
            />
        </Wrapper>
    </Container>
  )
}


export default DropComp

const Title = styled.div`
font-size: 16px;
font-weight: 600;
font-family: monospace;
`

const Wrapper = styled.div`
width: 90%;
display:flex;
flex-direction: column;
margin-top: 20px;
align-items: center;
`

const Container = styled.div`
width: 400px;
height: 80%;
border-radius: 10px;
background-color: white;
display:flex;
justify-content: center;
`