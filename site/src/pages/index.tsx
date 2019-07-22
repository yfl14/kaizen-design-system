import * as React from "react"
import Head from "../components/Head"
import styles from "./styles.scss"
import MainNav from "../components/MainNav"

export default props => (
  <>
    <Head />
    <MainNav currentPath={props.location.pathname} />
    <div className={styles.prominent}>🌱</div>
  </>
)
