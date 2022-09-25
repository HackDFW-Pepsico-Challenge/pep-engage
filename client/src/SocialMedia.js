import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { TikTokEmbed } from 'react-social-media-embed';
import { TwitterEmbed } from 'react-social-media-embed';


function SocialMedia()
{
return (<>
     
     <div className="d-flex align-items-start bg-light mb-3" >
     <div>
  <InstagramEmbed url="https://www.instagram.com/pepsico/?hl=en" width={328} />
</div>
    <div >
    <InstagramEmbed url="https://www.instagram.com/cheetos/?hl=en" width={328} />
  </div>
  <div>
  <InstagramEmbed url="https://www.instagram.com/doritos/?hl=en" width={328} />
  
  </div>
  <div>
    <InstagramEmbed url="https://www.instagram.com/lays/?hl=en" width={328}/>
  </div>


      </div>




      <div className="d-flex align-items-start bg-light mb-3" >
      <div >
  <TikTokEmbed url="https://www.tiktok.com/@pepsi/video/7146591802139643178" width={325} />
</div>
<div>
<TikTokEmbed url="https://www.tiktok.com/@cheetos/video/7146707936016878891" width={325}/>
</div>
<div>
  <TikTokEmbed url="https://www.tiktok.com/@doritos/video/7141508453008182570" width={325}/>
</div>
<div>
  <TikTokEmbed url="https://www.tiktok.com/@lays/video/7145166887909887275" width={325}/>
  </div>
      </div>

      <div className="d-flex align-items-start bg-light mb-3" >

      <div>
  <TwitterEmbed url={"https://twitter.com/PepsiCo/status/1571521730904031235?t=MRG83ZAizKDcy5dndSKe1w&s=08"} width={325} />
</div>

<div>
  <TwitterEmbed url={"https://twitter.com/ChesterCheetah/status/1526185822365667331?t=e8VVvEEdN2WsViUX_FvYhA&s=08"} width={325}/>
  </div>
 <div>
   <TwitterEmbed url={"https://twitter.com/Doritos/status/1562549705174687746?cxt=HHwWhIChjbOrpa8rAAAA"} width={325}/>
   </div> 
 <div>
   <TwitterEmbed url="https://twitter.com/LAYS/status/1573371584315785216?cxt=HHwWgICw7dXH3tUrAAAA" width={325}/>
   </div>  

</div>

  

  </>
)
}
export default SocialMedia;