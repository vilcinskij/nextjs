import styles from '../styles/Cmr.module.css'

export default function Grafa({ number, title }) {
    return (
        <div className={styles.grafa_border}>
            <div className={styles.grafa_description}>{number}{title}</div>
            <div className={styles.grafa_input}>
                <textarea className={styles.grafa_textarea}></textarea>
            </div>
        </div>
    )
}

