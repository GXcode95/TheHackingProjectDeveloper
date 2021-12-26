import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Image } from 'cloudinary-react'
import APIManager from 'services/Api'
import { useSelector } from 'react-redux'
import { cloudName, uploadPreset } from 'config/cloudinary.js'

const FileDropzone = () => {
  const [uploadedFileID, setUploadedFileID] = useState()
  const user = useSelector(state => state.userReducer.user)
  const onDrop = useCallback((acceptedFiles) => {

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
    acceptedFiles.forEach(async (file) => {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("upload_preset", uploadPreset) // Needed to upload on cloudinary

      const response = await fetch(url, {
        method: 'post',
        body: formData
      })
      const data = await response.json()
      console.log("DATA", data)
      setUploadedFileID(data.public_id)
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accepts: "image/*", /* */
    multiple: false,
  })

  React.useEffect(
    () => {
      if (user && user.id)
        APIManager.updateUserAvatar(uploadedFileID, user.id)
    },
    [uploadedFileID, user]
  )

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
      <Image
        cloudName={cloudName}
        publicId={uploadedFileID}
        width="300"
        crop="scale"
      />
    </div>
  )
}

export default FileDropzone