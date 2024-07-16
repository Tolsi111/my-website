import styles from './AnimatedBackground.module.scss'

export default function AnimatedBackground() {
    return (
        <div className={styles.background}>
            <div className={`${styles.bottom} ${styles['bottom-first']}`}/>
            <div className={`${styles.bottom} ${styles['bottom-second']}`}/>
            <div className={styles['bottom-inner']}></div>

            <div className={`${styles.top} ${styles['top-first']}`}/>
            <div className={`${styles.top} ${styles['top-second']}`}/>
            <div className={styles['top-inner']}></div>
            <div className={styles['glass-blur']}></div>
        </div>
    )
}