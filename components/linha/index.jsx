import styles from './linha.module.css'
import Box from '../box/index'

export default function Linha(props) {
    return (
        <div className={styles.linha}>
            <Box preta={props.preta}/>
            <Box preta={!props.preta}/>
            <Box preta={props.preta}/>
            <Box preta={!props.preta}/>
            <Box preta={props.preta}/>
            <Box preta={!props.preta}/>
            <Box preta={props.preta}/>
            <Box preta={!props.preta}/>
        </div>
    )
}