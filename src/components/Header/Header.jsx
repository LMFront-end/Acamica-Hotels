import React from 'react';
import moment from 'moment';
import "moment/locale/es";
import styles from './Header.module.css'
import Flip from 'react-reveal/Fade';
import ActiveFilters from '../ActiveFilters/ActiveFilters';
moment.locale("es");


function Header(props) {
    const {
        from,
        to,
        filterCountry,
        filterPrice,
        filterSize,
        filtersActives,
        checkPrice,
        priceMsg,
        defaultValues
    } = props;

    return ( 
        <header className = { styles.header } >
        <Flip left>
        <h1 className = { styles.header__title } > 
        reserva de hoteles <br />
        {/* <span className = { styles.header__title__span}>
        En cualquier fecha  <br />
        De cualquier precio <br />
        De cualquier tamaño <br />
        </span> */}
        </h1>
        </Flip>

        

        <ActiveFilters 
            prices={filterPrice}
            size={filterSize}
            country={filterCountry}
            checkIn={from}
            checkOut={to}
            filtersActives={filtersActives}
            checkPrice={checkPrice}
            headerPriceMsg={priceMsg}
            defaultValues={defaultValues}
        />

        </header>
    )
}

export default Header;