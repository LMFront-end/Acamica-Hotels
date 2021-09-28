import React from 'react';
import styles from './ResetFilters.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash} from "@fortawesome/free-solid-svg-icons";


function ResetFilters(props) {
    const { handleReset } = props;
    return (
      <button className={styles.filters__reset} onClick={handleReset}>
        <FontAwesomeIcon icon={faTrash} className={styles.iconButton} />
        LIMPIAR
      </button>
    );
  }
  
  export default ResetFilters;

