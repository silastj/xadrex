import styles from '../box/box.module.css'


export default function Box(props) {
    return (
        <div
        style={{
            backgroundColor:props.preta ? '#000' : '#fff'
        }}
            className={styles.box}>
        
        </div>
    )
}