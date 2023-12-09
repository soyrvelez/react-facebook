import Image from "next/image"
import styles from '../../styles/Games.module.css'
export default function SideBarAction({ icon, name }) {
    return (
        <div className={styles.gameCategory}>
            <Image src={icon} width="35" height="35" />
            <h3>{name}</h3>

        </div>
    )
}
