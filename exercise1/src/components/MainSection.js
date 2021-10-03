import React from 'react'
import styles from './MainSection.module.css'

export default function MainSection(props) {


    return (
        <div className={styles.maincontainer}>

          <div className={styles.mainbox}>

              <div className={styles.kuva}>
                  <img style={{height:'250px', width:'560px', marginTop:'10px', marginLeft:'20px'}} src={props.kuva} alt="kuva" />
              
                    <div className={styles.teksti}>
                      <span className={styles.topic}> {props.topic} | </span> {props.body}

                      <div className={styles.leima}>
                        <span className={styles.aikajapaikka}> {props.aikajapaikka} </span>
                    
                    </div>
                    </div>
                    </div>
          </div>
        </div>
    )
}

