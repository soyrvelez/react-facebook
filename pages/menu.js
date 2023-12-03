import styles from '../styles/Menu.module.css'
import Link from 'next/link';
import Image from 'next/image'

export default function Menu() {
  return (
    <div className={styles.menu}>
      <Link href="email/inbox">
        <Image src="/messenger-logo.png" alt="messages" width="40" height="40" className={styles.icon} />
      </Link>
        <Image src="/bell.png" alt="notifications" width="40" height="40" className={styles.icon}/>
    </div>
  );
}
