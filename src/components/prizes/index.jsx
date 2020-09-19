import React from 'react';
import styles from './styles.module.scss'

function Prizes(){
    return(
        <div className={styles.prizes}>
            <h1 className={styles.title}>Prizes</h1>
            <div className={styles.content}>
            <div className={styles.prizeCard}>
                <ul>
                    <li>
                        <h1 className-={styles.amount}>₹ 20,000</h1>
                        <p className={styles.position}>1st Prize</p>
                    </li>
                    <li>
                        <h1 className-={styles.amount}>₹ 10,000</h1>
                        <p className={styles.position}>Runner Up</p>
                    </li>
                </ul>
            </div>

            </div>
        </div>
    )
}

export default Prizes