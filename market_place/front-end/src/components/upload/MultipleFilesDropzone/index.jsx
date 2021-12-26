import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { Image } from 'cloudinary-react'
import APIManager from 'services/Api'
import { useSelector } from 'react-redux'

const cloudName = "thefinalproject"
const uploadPreset = "qxdc6yj1"

const MultipleFilesDropzone = ({uploadedFilesID,setUploadedFilesID}) => {
const user = useSelector(state => state.userReducer.user)

  const onDrop = useCallback((acceptedFiles) => {

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
    acceptedFiles.forEach(async (file) => {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("upload_preset",uploadPreset) // Needed to upload on cloudinary

      const response = await fetch(url,{
        method: 'post',
        body: formData
      })
      const data = await response.json()
      console.log("DATA", data)
      setUploadedFilesID([...uploadedFilesID, data.public_id])
    })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  const {getRootProps, getInputProps, isDragActive} = useDropzone({
    onDrop,
    accepts: "image/*", /* */
  })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
      <div>
        {uploadedFilesID.map(fileID => (
            <Image 
              cloudName={cloudName}
              publicId={fileID}
              width="80"
              crop="scale"
              key={fileID}
            />
        ))}
      </div>

    </div>
  )
}

export default MultipleFilesDropzone 