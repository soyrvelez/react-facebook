import styles from '../../styles/Games.module.css';
import SideBarAction from './sideBarActionCard';

const actionArray = [
    { icon: '/gamepad.png', name: "Play Games" },
    { icon: "/bell.png", name: "Notifications" },

]

export default function SideBarActions() {
    const displayActionArray = actionArray.map((action, idx) => {
        return <SideBarAction icon={action.icon} name={action.name} key={idx} />
    })

    return (
        <div className={styles.gamingCategories}>
            {displayActionArray}
        </div>
    )
}
