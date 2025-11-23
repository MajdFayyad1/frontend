import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'

const Footer = () =>{
    return(
        <div className='footer'>
            <br/>
            <div className='socialMedia'>
                <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon /> <YouTubeIcon/>
            </div>
            <p>&copy; 2025 Lebanese International University</p>
        </div>
    )
}
export default Footer