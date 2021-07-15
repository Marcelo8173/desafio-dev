import React from 'react'
import { useDropzone } from 'react-dropzone'
import * as S from './styled'

const DropZone = () => {
  const onDrop = () => {
    console.log('Aqui')
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.xlsx'
  })

  return (
    <S.DropZone {...getRootProps()}>
      <input accept=".xlsx" {...getInputProps()} />
    </S.DropZone>
  )
}

export default DropZone
