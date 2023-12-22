import styles from '../../styles/Cmr.module.css'
import { useState } from 'react'

export default function Grafa4({ date, title, country }) {

    // const [num, setNum] = useState(0);
    // const [date, setDate] = useState()

    // function clickHandler() {
    //     setNum(num + 1);
    //     let today = new Date()
    //     let day = ("0" + today.getDate()).slice(-2);
    //     let month = ("0" + (today.getMonth() + 1)).slice(-2);
    //     let year = today.getFullYear()
    //     setDate(`${year}-${month}-${day}`)

    // }

    return (
        <div className={styles.grafa_border}>
            <div className={styles.grafa_title}>
                <span className={styles.grafa_number}>4</span>
                <span className={styles.grafa_description}>Place and date of taking over the goods</span>

                {/* <button onClick={clickHandler}>TODAY</button> */}

            </div>
            <div className={styles.grafa4_form}>
                <label className={styles.label}>Place</label><input className={styles.input}></input>
                <label className={styles.label}>Country</label>
                <input
                    className={styles.input}
                    id='load-country'
                    // defaultValue={num}
                    >


                </input>
                <label className={styles.label}>Date</label>
                <input
                    className={styles.input}
                    type='date'
                    id='load-date'
                    defaultValue={date}

                >
                </input>
            </div>
        </div>
    )
}

