import { ThirdwebNftMedia, useContract, useNFTs } from '@thirdweb-dev/react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import styles from '../styles/Nfts.module.css'
 const Nfts: NextPage = () => {
  const { contract } = useContract('0xaB94f195aB319121046D18000b2B9E4C4Ddc8944')
  const { data: nfts, isLoading, error } = useNFTs(contract)
  console.log(contract)
  console.log(nfts)
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.info}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          nfts?.map((nft) => {
            return (
              <div key={nft.metadata.id}>
                <ThirdwebNftMedia
                  metadata={nft.metadata}
                  height="200"
                  style={{ borderRadius: '10px' }}
                />
                <p>{nft.metadata.name}</p>
              </div>
            )
          })
        )}
      </section>
    </div>
  )
}
 export default Nfts
