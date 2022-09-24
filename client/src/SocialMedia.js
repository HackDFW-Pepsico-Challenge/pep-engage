import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { TikTokEmbed } from 'react-social-media-embed';


function SocialMedia()
{
return (<>

    <div style={{ display: 'flex', justifyContent: 'center' }}>
  <InstagramEmbed url="https://www.instagram.com/pepsico/?hl=en" width={328} />
</div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <InstagramEmbed url="https://www.instagram.com/cheetos/?hl=en" width={328} />
  </div>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
  <TikTokEmbed url="https://www.tiktok.com/@pepsi/video/7146591802139643178" width={325} />
</div>
  </>
)
}
export default SocialMedia;