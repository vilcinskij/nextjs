import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Cmr from './cmr'
import TodayButton from '@/components/TodayButton'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // ---
  const [num, setNum] = useState(0);
  const [date, setDate] = useState()


  
  function clickHandler() {
    setNum(num + 1);
    let today = new Date()
    let day = ("0" + today.getDate()).slice(-2);
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let year = today.getFullYear()
    setDate(`${year}-${month}-${day}`)
    console.log('LBAS');
  }
  // ---
  return (
    <div className={styles.container}>
      <h1 className={`${styles.title} font-effect-fire-animation`}>CMR generator</h1>
      <TodayButton />
      <button onClick={clickHandler}>SANDIENO</button>
      <Cmr date={date}/>
    </div>
  )
}
