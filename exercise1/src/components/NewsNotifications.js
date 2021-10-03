import React from 'react'
import styles from './NewsNotifications.module.css';

export default function NewsNotifications(props) {
    return (
        <div className={ styles.container }>
            <span className={styles.header } > { props.topic}:&nbsp;</span>  {props.body }

        </div>
    )
}
