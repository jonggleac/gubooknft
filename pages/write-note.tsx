import { useContract, useContractWrite } from '@thirdweb-dev/react'
import type { NextPage } from 'next'
import { useState } from 'react'
import Header from '../components/Header'
import styles from '../styles/WriteNote.module.css'


 const WriteNote: NextPage = () => {
 const { contract } = useContract('0xaB94f195aB319121046D18000b2B9E4C4Ddc8944')
 const {
  mutate: write,
  isLoading,
  error,
 } = useContractWrite(contract, 'writeNote')

 const [id, setID] = useState('')
 const [note, setNote] = useState('')


  return (
  <div className={styles.container}>
   <Header />
   <section className={styles.info}>
    <p className={styles.label}>ID:</p>
    <input
     type="text"
     name="id"
     value={id}
     onChange={(e) => setID(e.target.value)}
    />
    <p className={styles.label}>Note:</p>
    <textarea
     name="note"
     value={note}
     rows={10}
     onChange={(e) => setNote(e.target.value)}
    />
    <br />
    <button disabled={isLoading} onClick={() => write([id, note])}>
     Write Note
    </button>
    {error ? <p>{error.toString()}</p> : null}
   </section>
   <p>Write Note</p>
  </div>
 )
}
 export default WriteNote
