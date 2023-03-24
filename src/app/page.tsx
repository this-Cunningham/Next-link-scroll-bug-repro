
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href='/blog' style={{ height: '100px', width: '100px', backgroundColor: 'green'}}>
        Click to go To Blog
      </Link>
    </main>
  )
}
