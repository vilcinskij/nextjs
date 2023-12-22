import Grafa from '@/components/grafa';
import styles from '../styles/Cmr.module.css';
import Grafa4 from '@/components/grafos/grafa4';
import { useState } from 'react';

const Cmr = () => {

    const [num, setNum] = useState(0);
    const [date, setDate] = useState()

    function clickHandler() {
        setNum(num + 1);
        let today = new Date()
        let day = ("0" + today.getDate()).slice(-2);
        let month = ("0" + (today.getMonth() + 1)).slice(-2);
        let year = today.getFullYear()
        setDate(`${year}-${month}-${day}`)
    }  

    return (
        <div className={styles.mainCmrBlank}>
            <button onClick={clickHandler}>TODAY</button>
            <div className={styles.l01_logo}>
                <Grafa number='1' />
                <Grafa number='logo' />
            </div>
            <div className={styles.l02_16}>
                <Grafa number='2' />
                <Grafa number='16' />
            </div>
            <div className={styles.l03_18}>
                <div className={styles.b03_05}>
                    <Grafa number='3' />
                    <Grafa4 country='KZZZ' date={date}/>
                    <Grafa number='5' />
                </div>
                <div className={styles.b17_18}>
                    <Grafa number='17' />
                    <Grafa number='18' />
                </div>
            </div>
            <div className={styles.l06_12}>
                <Grafa number='6-9' />
                <Grafa number='10' />
                <Grafa number='11' />
                <Grafa number='12' />
            </div>
            <div className={styles.l13_19}>
                <Grafa number='13' />
                <Grafa number='19' />
            </div>
            <div className={styles.l14}>
                <div className={styles.grafa_border}>14</div>
            </div>
            <div className={styles.l15_20}>
                <Grafa number='15' />
                <Grafa number='20' />
            </div>
            <div className={styles.l21_24}>
                <div className={styles.b21_23}>
                    {/* <Grafa number='21' /> */}
                    <div className={styles.grafa_border}>21</div>
                    <div className={styles.b22_23}>
                        <Grafa number='22' />
                        <Grafa number='23' />
                    </div>
                </div>
                <Grafa number='24' />

            </div>
            <div className={styles.l25_27}>
                <Grafa number='25' />
                <Grafa number='26' />
                <Grafa number='27' />
            </div>
            <div className={styles.l28}>L28</div>
            <div className={styles.l29}>L29</div>
        </div>
    )
}

export default Cmr;