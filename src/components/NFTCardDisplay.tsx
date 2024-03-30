import React from 'react'
import { NFTCard } from '.'
import nft1 from "./images/nft1.png"

const NFTCardDisplay = () => {
  return (
    <div className='gap-5 grid grid-flow-col'>
        <NFTCard name={"abv"} price={12} img={nft1.src}/>
        <NFTCard name={"abv"} price={12} img={nft1.src}/>
        <NFTCard name={"abv"} price={12} img={nft1.src}/>
    </div>
  )
}

export default NFTCardDisplay