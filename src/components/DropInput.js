import React, { useRef } from 'react'
import { useState } from 'react'
import styled from "styled-components"
import PropTypes from "prop-types"

const DropInput = ({onFileChange}) => {

    const [fileList, setFileList] = useState([])
    const [imageList, setImageList] = useState([])

    const onFileDrop = (e) => {
        const newFile = e.target.files[0]
        const save = URL.createObjectURL(newFile)

        const photos  = {
          id: fileList.length + 1,
          image: save,
          link: newFile
        }

        const updateSave = [...imageList, photos]

        const updateList = [...fileList, newFile]

        setImageList(updateSave)
        setFileList(updateList)

       onFileChange(updateList)

        console.log(fileList)
    }

  return (
    <> 
    <Container>
        <Text>Drag and Drop your files here</Text>
        <Input type="file" onChange={onFileDrop}/>
    </Container>
   
     
     
       <ShowImage> 
        {imageList.map((props)=>(
            props.link.type.split("/")[1] === "png" || props.link.type.split("/")[1] === "jpg" ||props.link.type.split("/")[1] === "jpeg" ?
      <Image src={props.image}/>
      // <span>{props?.link?.size}</span>
          : 
          <Video src={props.image} autoPlay/>
    ))} 
      </ShowImage>
   
    </>

   
  )
}


DropInput.propTypes = {
    onFileChange: PropTypes.func
}


export default DropInput

const Video = styled.video`
width: 100px;
height: 100px;
border-radius: 4px;
background-color: wheat;
margin: 8px 0;
object-fit: cover;
`
const Image = styled.img`
width: 100px;
height: 100px;
border-radius: 4px;
background-color: wheat;
margin: 8px 0;
object-fit: cover;
`
const ShowImage = styled.div`
width: 100%;
height: auto;
display: flex;
margin-top: 30px;
flex-direction: column;
`
const Input = styled.input`
width: 100%;
height: 100%;
position: absolute;
opacity: 0;
cursor: pointer;
`
const Text = styled.div``
const Container = styled.div`
width: 100%;
border-radius: 15px;
border: dashed 2px blue;
background-color: #fafcff;
height: 200px;
margin-top: 30px;
display: flex;
justify-content: center;
align-items: center;
color: lightgray;
position: relative;
overflow: hidden;
/* cursor: pointer; */
`