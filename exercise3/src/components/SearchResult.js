import React, {useState} from 'react';
import styles from './SearchResult.module.css';
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";


const StartRating =() => {
  const [rating, setRating]= useState(null);
  const [hover, setHover] = useState(null);
  return(
    <div>
      {[ ... Array(5)].map((star, i)=> {
        const ratingValue= i + 1;


        return(
          <label>
            <input 
            type="radio" 
            name="rating" 
            value={ratingValue} 
            onClick={()=> setRating(ratingValue)} 
            onMouseEnter={() =>setHover(ratingValue)}
            onMouseLeave={() =>setHover(null)}
            />

            <FaStar className="star" color={ratingValue <= (hover ||rating) ? "#ffc107" : "#e4e5e9"} size={30}/>
            </label>
        );
      })}
      <p>The rating is {rating}!</p> 
    </div>
  );
};

export default function SearchResult(props) {
  return (
    <div className={ styles.product }>
        <div>
          <div><img src={`/images/${props.image}`} /></div>
          <div className={ styles.name }>{ props.name }</div>
          <div>{ props.author }</div>
          <div className={styles.author}>${ props.price }</div>
          <div className={styles.rating}><StartRating/>{ props.rating }</div>
        </div>
    </div>
  )
}
