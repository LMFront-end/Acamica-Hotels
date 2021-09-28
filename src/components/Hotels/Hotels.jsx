import React from 'react';
import moment from 'moment';
import styles from './Hotels.module.css';
import {hotelsData} from '../../static/data';
import HotelCard from '../HotelCard/HotelCard';


function Hotels(props) {

    const {
        filterCountry,
        filterPrice,
        filterSize,
        filterDateFrom,
        filterDateTo,
        filtersActives,
        defaultValues,
        sizeOptions,
        checkPrice,
        priceIcon
    } = props;

    let hotels = hotelsData;


    /* filtrar por paises */

    if(filterCountry !== defaultValues.COUNTRIES) {
        hotels = hotels.filter((hotel) => filterCountry === hotel.country);
    } 

    /* filtrar por precios */
    if(filterPrice !== defaultValues.PRICES) {
        hotels = hotels.filter((hotel) => parseInt(filterPrice, 10) === hotel.price);
    }

    const findWithAttr = (array, attr, value) => {
        for(let i = 0; i < array.length; i++) {
            if(array[i][attr] === value) {
                return i;
            }
        }
    };

    /* filtrar por habitaciones */

    if(filterSize !== defaultValues.SIZES) {
        if(filterSize === sizeOptions[findWithAttr(sizeOptions, "size", "small")].value) {
            hotels = hotels.filter((hotel) => hotel.rooms <= 10);
        }

        else if(filterSize === sizeOptions[findWithAttr(sizeOptions, "size", "medium")].value) {
            hotels = hotels.filter((hotel) => hotel.rooms <=20);
        }

        else if (filterSize === sizeOptions[findWithAttr(sizeOptions, "size", "big")].value) {
            hotels = hotels.filter((hotel) => hotel.rooms > 20);
        }
    }

    /* filtrar hoteles por registro(entrada), registro(salida) */

    if(filterDateFrom && filterDateTo){
        if(filterDateTo >= filterDateFrom) {

            let format = "YYYY-MM-DD";
            let startDate = moment(filterDateFrom).format(format);
            let endDate = moment(filterDateTo).format(format);

            hotels = hotels.filter(
                (hotel) => 
                    startDate >= moment(hotel.availabilityFrom).format(format) &&
                    endDate <= moment(hotel.availabilityTo).format(format)
            );
        }
    }

    /* Variable booleana que indica el resultado de las coincidencias filtradas */

    const checkResults = (hotels) => {
        let searchResult = false;
        let filterIsActive = filtersActives;

        if(filterIsActive) {
            if(Array.isArray(hotels) && hotels.length) {
                searchResult = true;
            }        
        } 
        
        return searchResult;
    };

    return ( 
        <>
        <div>
            {filtersActives && (
                <h3 className={styles.searchText} >
                    {checkResults(hotels)
                        ? `Estos son los resultados de tu búsqueda: `
                        : `Lo sentimos, no se encontró alguna coincidencia de busqueda`
                    }                   
                </h3>
            )}
        </div>

        <section className={styles.hotelList}>
            {hotels.map((hotel) => {

                let price = checkPrice(hotel.price, priceIcon);

                return(

                    <HotelCard 
                    
                    key={hotel.slug}
                    img={hotel.photo}
                    name={hotel.name}
                    description={hotel.description}
                    city={hotel.city}
                    country={hotel.country}
                    rooms={hotel.rooms}
                    price={price}           
                    />
                );
            })}
        </section>
        </>
    )
}


export default Hotels;