import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { CloudDownload } from '@styled-icons/boxicons-regular/CloudDownload'
import * as S from './styled'

const DropZone = () => {
  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles[0]) {
      const extension = acceptedFiles[0].type
      console.log('extension', extension)
    }
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.csv'
  })

  return (
    <S.DropZone {...getRootProps()}>
      <input accept=".csv" {...getInputProps()} />
      <CloudDownload size={22} />
      <p>Importe soltando o documento aqui ou clicando nesta área</p>
    </S.DropZone>
  )
}

export default DropZone
