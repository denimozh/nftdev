import React from 'react'
import { NFTCard } from '.'
import nft1 from "./images/nft1.png"
import { nfts } from './ListOfNfts/NFTList'

const NFTCardDisplay = () => {
  return (
    <div className='gap-3 grid grid-rows-2 grid-flow-col'>
        {
          nfts.map((nft) => (
            <NFTCard key={nft.id} name={nft.title} price={nft.priceETH} img={nft.img}/>
          ))
        }
    </div>
  )
}

export default NFTCardDisplay