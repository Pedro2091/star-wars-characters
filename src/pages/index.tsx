import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'
import Header from '../components/Header'
import { Flex } from 'antd'
import CharacterList from 'src/components/CharacterList'

export default function Home() {
  const [search, setSearch] = useState<string | null>(null);
  const [currentPagination, setCurrentPagination] = useState<number>(1);
  const [totalCharacters, setTotalCharacters] = useState<number | undefined>(0);

  return (
    <div className={styles.root}>
      <Head>
        <title>Desafio Técnico</title>
        <meta name="description" content="Technical challenge for the Font-End Developer job" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Flex className={styles.contentContainer} vertical gap="3rem" align='center' justify='space-between'>
          <SearchBar className={styles.searchBar} setSearch={setSearch} />

          <CharacterList currentPagination={currentPagination} search={search} setTotalCharacters={setTotalCharacters} />

          <Pagination current={currentPagination} total={totalCharacters} setCurrentPagination={setCurrentPagination} />
        </Flex>
      </main>
    </div>
  )
}
