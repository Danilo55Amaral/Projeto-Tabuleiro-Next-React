import House from "./House";
import styles from "../styles/Linha.module.css";

export default function Linha(props) {
    return (
        <div className={styles.linha}>
            <House preta={props.preta} />
            <House preta={!props.preta} />
            <House preta={props.preta} />
            <House preta={!props.preta} />
            <House preta={props.preta} />
            <House preta={!props.preta} />
            <House preta={props.preta} />
            <House preta={!props.preta} />
        </div>
    )
}