import * as React from 'react'
import { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { main, text, title, description, mockup, buttons, button } from './main.module.css'
import Videos from './videos'

const Main = () => {
  const [videosOpen, setVideosOpen] = useState(false);

  return (
    <div className={main}>
      <div className={text}>
        <div className={title}>Cyberstudio</div>
        <div className={description}>Turn Text into Video</div>
      </div>
      <StaticImage className={mockup} src="../images/mockup.png" alt="mockup" loading="eager" objectFit="contain" placeholder="none" quality={90} />
      <div className={buttons}>
        <a className={button} onClick={() => setVideosOpen(true)}>Play Video</a>
        <a className={button} href="https://face.cyberstudio.app">Open Studio</a>
      </div>
      <Videos isOpen={videosOpen} onClose={() => setVideosOpen(false)} />
    </div>
  )
}

export default Main
