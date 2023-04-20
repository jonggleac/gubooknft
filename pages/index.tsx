import { Web3Button } from '@thirdweb-dev/react'
import type { NextPage } from 'next'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
 const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <section className={styles.info}>
        <img src="./logo.png" alt="logo" className={styles.eyeLogo} />
        <h1>gubook Project </h1>
        <p>NFT Project using thirdweb.com</p>
        <br />
        <Web3Button
          contractAddress="0xaB94f195aB319121046D18000b2B9E4C4Ddc8944" 
          
          action={(contract) => {
            contract.erc721.claim(1)
          }} // Logic to execute when clicked
        >
          Claim gubook
        </Web3Button>
      </section>
    </div>
  )
}

 export default Home
