import styles from "../styles/House.module.css";

export default function House(props) {
    return (
        <div
            style={{
                backgroundColor: props.preta ? "#000" : "#fff"
            }}
            className={styles.house}>

        </div>
    )
}