import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faBed } from "@fortawesome/free-solid-svg-icons";
import Zoom from 'react-reveal/Zoom';
import styles from './HotelCard.module.css';



/* Este componente se va renderizar en el componente Hotels */


function HotelCard(props) {

return (
    <>
    <Zoom left>
        <div className={styles.hotelCard} key={props.slug}>
            <img src={props.img} alt={props.name} className={styles.hotelCard__img}/>
            <h3 className={styles.hotelCard__name}>
                {props.name}
            </h3>
            <p className={styles.hotelCard__description}>
                {props.description}
            </p>

            <div className={styles.hotel__location}>
                <FontAwesomeIcon icon={faMapMarkerAlt}
                className={styles.hotelCard__location__icon} />

                <span className={styles.hotelCard__location__text}>
                    {props.city}, {props.country}
                </span>
            </div>

            <div className={styles.hotelCard__info}>
                <div className={styles.hotelCard__info__room}>
                    <FontAwesomeIcon
                        icon= {faBed}
                        className={styles.hotelCard__info__room__icon}
                        />

                        <span className={styles.hotelCard__info__room__text}>
                            {props.rooms} Habitaciones
                        </span>
                </div>

                <div className={styles.hotelCard__info__price}>
                    <span className={styles.hotelCard__info__price__text}>
                        {props.price}
                    </span>
                </div>
            </div>

            <button className={styles.hotelCard__btn} >RESERVAR</button>

        </div>
        </Zoom>
    </>
)
}


export default HotelCard;
