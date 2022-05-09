import * as React from 'react'
import Modal from 'react-modal'
import { video } from './videos.module.css'

const Videos = ({ isOpen, onClose }: { isOpen: boolean; onClose: Function; }) => {
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={() => onClose()} 
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          padding: '0',
          background: 'transparent',
          border: 'none',
          borderRadius: '0',
        },
      }}
      contentLabel="Videos Modal">
      <iframe 
        className={video}
        width="1920"
        height="1080"
        src="https://www.youtube.com/embed/videoseries?list=PLnSqxjgVAaLZdlXfG23SMCN5eANKWROQf"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </Modal>
  )
}

export default Videos
