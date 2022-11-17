import styles from './Fox.module.scss';

export function ModuleBasedFox() {
    return (
        <div className={`${styles.card} card`}>
            <img src="Screenshot 2022-11-17 081529.png" alt=""/>
            <div className={styles.content}>
                <h2>Rev smaker litt værre</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nam qui quisquam repellat! Ad consectetur eveniet, id nisi quas ut. Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <button className={styles.juicyButton}>Fristende knapp</button>
            </div>

        </div>
    )
}