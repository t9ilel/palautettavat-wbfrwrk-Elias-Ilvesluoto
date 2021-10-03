import React from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import NewsNotifications from './components/NewsNotifications';
import MainSection from './components/MainSection';
import SideSection from './components/SideSection';

const sidefiles=[


  {
    numero:'1',
    topic:'Talous',
    body:'Clubilla rahahuolet ohi.'

  },

  {
    numero:'2',
    topic:'Rakentaminen',
    body:'Saunalautta projekti etenee kovaa vauhtia!'

  },

  {
    numero:'3',
    topic:'Hankinnat',
    body:'5 lynx 360 klubille. "latvalinnustuksessa kätevä veheje."'

  },
  {
    numero:'4',
    topic:'Rikosepäily',
    body:'Rikoksesta epäilty clubin rahastonhoitaja "En se minä ollut."'

  },
  {
    numero:'5',
    topic:'Metsätys',
    body:'Lintuja vähemmän kuin kahdena edellisenä vuonna, kannat kuitenkin vahvoja.'

  },
]

const mainfiles=[
  {
    kuva: 'metto.jpg',
    topic:'Metsästys',
    body:'Kanalinnuista tehty runsaasti havaintoja Ranuan seudulla. Riistakolmio mittaukset antavat samansuuntaisia tuloksia.',
    aikajapaikka: 'Ranua 10.9.2021'
  },
  {
    kuva: 'lautta.jpg',
    topic:'Rakentaminen',
    body:'Lauttasauna etenee valtavaa vauhtia. "arviotu valmistumisaika ensi kesänä" toteaa mestari.',
    aikajapaikka: 'Simojärvi 12.9.2021'
  },
  {
    kuva: 'lynx.jpg',
    topic:'Kilpaurheilu',
    body:'Varpulampi-ojavaara ajettiin ennätysvauhtia. Reessä olevat miehet "pelotti pirusti!"',
    aikajapaikka: 'Saariharju 9.10.2021'
  },

]



function App() {
  return (
    <div>
      <Header />
      <NewsNotifications topic='Skandaali'  body= 'Kavalsiko rahastonhoitaja clubin rahat?' />
      <NewsNotifications topic='Juuri nyt'  body= 'Varpulampi klubille pilkkahintaan.' />
      <NewsNotifications topic='KLUBI-mietintä'  body= 'Kuka ajoi kelkan tankin tyhjäksi?' />


       <div className={styles.paasivubar}>

        <div className={styles.maincontainer}>
         {
           mainfiles.map(element => <MainSection kuva={element.kuva} topic ={element.topic} body={element.body} aikajapaikka={element.aikajapaikka}/>)  
         }
         </div>

        <div className={styles.sidecontainer}>
         {
           sidefiles.map(element => <SideSection numero ={element.numero} topic ={element.topic} body={element.body}/>)   
         }
 
        </div>
      </div>


    </div>
  )
}

export default App;
