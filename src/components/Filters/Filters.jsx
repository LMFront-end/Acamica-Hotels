import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faBed } from "@fortawesome/free-solid-svg-icons";
import styles from './Filters.module.css'
import ResetFilters from '../ResetFilters/ResetFilters';

function Filters(props) {
    const {
      handleSelected,
      handleReset,
      country,
      price,
      size,
      dateTo,
      dateFrom,
      countryOptions,
      priceOptions,
      sizeOptions
    } = props;
  
    let now = moment().format("YYYY-MM-DD");
    return (
      <section className={styles.filters}>
        <input
          type="date"
          name="dateFrom"
          onChange={handleSelected}
          className= {styles.filters__dateFrom}
          value={dateFrom}
          min={now}
        />
        <input
          type="date"
          name="dateTo"
          onChange={handleSelected}
          className={styles.filters__dateTo}          
          value={dateTo}
        />
        <select
          id="filters__countries"
          name="countries"
          onChange={handleSelected}
          value={country}
          className={styles.filters__countries}
        >

          {countryOptions.map((option) => {
            return (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            );
          })}
        </select>
        <select
          id="filters__prices"
          value={price}
          onChange={handleSelected}
          name="prices"
          className={styles.filters__prices}
        >
          {priceOptions.map((option) => {
            return (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            );
          })}
        </select>
        <select
          id="filters__sizes"
          onChange={handleSelected}
          name="sizes"
          className={styles.filters__sizes}
          value={size}
        >
          {sizeOptions.map((option) => {
            return (
              <option value={option.value} key={option.label}>
                {option.label}
              </option>
            );
          })}
        </select>
        <ResetFilters handleReset={handleReset} />
      </section>
    );
  }
  
  export default Filters;
