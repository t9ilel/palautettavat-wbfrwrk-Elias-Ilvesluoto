import React from 'react'
import styles from './Header.module.css';

export default function Header() {



    return (
        <div className = { styles.headerBackground }>
            <div className = { styles.container }>
              <div className = { styles.brand }>TOC sanomat</div>
              <div className= {styles.uutvuoasi}> Uutiset &nbsp; 
               Vuokraus &nbsp; 
               Asiakaspalvelu </div>
              <div className = {styles.likiva }> Liity jäseneksi &nbsp; 
                Kirjaudu &nbsp; 
                Valikko </div>
                </div>
            

            
        </div>
    )
}
