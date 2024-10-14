'use client'
import React from 'react'

import './index.scss'

const baseClass = 'thumbnail'

import type { SanitizedCollectionConfig } from 'payload'

import { File } from '../../graphics/File/index.js'
import { ShimmerEffect } from '../ShimmerEffect/index.js'

export type ThumbnailProps = {
  alt?: string
  className?: string
  collectionSlug?: string
  doc?: Record<string, unknown>
  fileSrc?: string
  imageCacheTag?: string
  size?: 'expand' | 'large' | 'medium' | 'small'
  uploadConfig?: SanitizedCollectionConfig['upload']
}

export const Thumbnail = (props: ThumbnailProps) => {
  const { className = '', doc: { filename, mimeType } = {}, fileSrc, imageCacheTag, size } = props
  const classNames = [baseClass, `${baseClass}--size-${size || 'medium'}`, className].join(' ')
  const fileType = (mimeType as string)?.split('/')?.[0]
  const [fileExists, setFileExists] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    if (!fileSrc || !fileType) {
      setFileExists(false)
      return
    }
    if (fileType === 'image') {
      const img = new Image()
      img.src = fileSrc
      img.onload = () => setFileExists(true)
      img.onerror = () => setFileExists(false)
    } else if (fileType === 'video') {
      const video = document.createElement('video')
      video.src = fileSrc
      video.crossOrigin = 'anonymous'
      video.onloadeddata = () => setFileExists(true)
      video.onerror = () => setFileExists(false)
    } else {
      setFileExists(false)
    }
  }, [fileSrc, fileType])

  const src = `${fileSrc}${imageCacheTag ? `?${imageCacheTag}` : ''}`
  const alt = props.alt || (filename as string)

  return (
    <div className={classNames}>
      {fileExists === undefined && <ShimmerEffect height="100%" />}
      {fileExists && fileType === 'image' && <img alt={alt} src={src} />}
      {fileExists && fileType === 'video' && (
        <video
          aria-label={alt}
          autoPlay={false}
          controls={false}
          muted={true}
          playsInline={true}
          src={src}
        />
      )}
      {fileExists === false && <File />}
    </div>
  )
}
