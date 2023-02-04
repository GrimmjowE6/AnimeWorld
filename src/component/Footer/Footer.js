import React from 'react'
import discordLogo from '../../Image/discordLogo.svg'
import faceLogo from '../../Image/faceLogo.svg'
import instaLogo from '../../Image/instaLogo.svg'
import twitterLogo from '../../Image/twitterLogo.svg'

const Footer = () => {
    return (
        <footer className='w-100 bg-dark  '>
            <div className='row col-8 p-2 d-flex m-auto justify-content-between'>
                <a href=''><img src={discordLogo} className='p-3 ' alt='social-media-logo'></img></a>
                <a href=''><img src={faceLogo} className='p-3 ' alt='social-media-logo'></img></a>
                <a href=''><img src={instaLogo} className='p-3 ' alt='social-media-logo'></img></a>
                <a href=''><img src={twitterLogo} className='p-3 ' alt='social-media-logo'></img></a>
            </div>
        </footer>
    )
}

export default Footer
