import {useEffect, useState} from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {  
  
  return (
    <div className={styles.container}>
      <Navbar />
    </div>
  )
}

export default Home
