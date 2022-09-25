import React from 'react'
import Font, { Text } from 'react-font'
import Object from './Object';



export default function Web3() {
   
  return (

<div className="d-flex align-items-start bg-light mb-6 mt-3" >
<div>
<Text family='Monoton' style={{ fontSize: 50, margin: 0 }} >
       Own a piece of<br/> your childhood!
      </Text>


  <Font>Experience your favorite snacks  in the metaverse. </Font>    
  <Font> Limited edition Collectible NFTs coming soon! </Font> 

   <img className=" img-responsive chester-logo" src="./chester.png"/>

     </div>

<div className="mt-2">
<Object objFile="untitled.obj" mtlFile="untitled.mtl"/>
<Object objFile="lays_bbq.obj" mtlFile="lays_bbq.mtl"/>
<Object objFile="ruffles.obj" mtlFile="ruffles.mtl"/>
<Object objFile="doritos.obj" mtlFile="doritos.mtl"/>
</div>

<div className="mt-2">
<Object objFile="otep.obj" mtlFile="otep.mtl"/>
<Object objFile="popcorners.obj" mtlFile="popcorners.mtl"/>
<Object objFile="cheetos_2.obj" mtlFile="cheetos_2.mtl"/>
<Object objFile="lays_vinegar.obj" mtlFile="lays_vinegar.mtl"/>

</div>

</div>
    
  )
}
