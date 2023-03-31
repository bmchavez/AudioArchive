import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
// import styles from '@/styles/Home.module.css'
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <div className="bg-red-500">
        <h1>Hello Audio Archive!</h1>
      </div>
    </>
  );
}
