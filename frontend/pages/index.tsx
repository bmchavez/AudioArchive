import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
// import styles from '@/styles/Home.module.css'
import styles from '../styles/Home.module.css';
import NavHeader from '../components/Navbar';

// const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
  return (
    <>
      <NavHeader />
      <div className="mt-9">
        <h1>Hello Audio Archive!</h1>
      </div>
    </>
  );
}
