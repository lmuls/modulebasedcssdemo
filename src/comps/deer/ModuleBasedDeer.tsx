import {useState} from "react";
import styles from './Deer.module.scss';
import borrowedStyles from '../fox/Fox.module.scss'

export function ModuleBasedDeer() {
    const [active, setActive] = useState<boolean>(false);

    return (
        <div className={`${styles.card} ${active ? styles.active: ""}`}>
            <img src="669639.png" alt=""/>
            <div className={styles.content}>
                <h2>Hjort er digg</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nam qui quisquam repellat! Ad consectetur eveniet, id nisi quas ut.</p>
                <button className={borrowedStyles.juicyButton} onClick={() => setActive(prevVal => !prevVal)}>Ikke trykk her</button>
            </div>
        </div>
    )
}