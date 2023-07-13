import React from 'react';
import Link from "next/link";
import styles from './TheHeader.module.scss'
const TheHeader = () => {
    return <div className={styles.header}>
        <Link href={'/'}>Main</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/blog'}>Blog</Link>
    </div>
};

export default TheHeader;