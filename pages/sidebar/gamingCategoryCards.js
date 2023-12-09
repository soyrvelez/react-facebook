import Image from "next/image"
import styles from '../../styles/Games.module.css'
export default function GamingCategory({ icon, name }) {
    return (
        <div className={styles.gameCategory}>
            <Image src="/engineer.png" width="80" height="80" />
            <h3>{name}</h3>

        </div>
    )
}
