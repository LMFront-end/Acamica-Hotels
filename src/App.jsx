import React, {useState}  from 'react'
import './App.css';
import moment from 'moment';
import Hotels from './components/Hotels/Hotels'
import Filters from './components/Filters/Filters';
import Header from './components/Header/Header';

function App() {

  const DefaultValues = {
    COUNTRIES: "Todos los países",
    PRICES: "Cualquier precio",
    SIZES: "Cualquier tamaño",
    DATEFROM: "",
    DATETO: ""
  };

  /* Controlled states */
  const [filters, setFilters] = useState({
    countries: DefaultValues.COUNTRIES,
    prices: DefaultValues.PRICES,
    sizes: DefaultValues.SIZES,
    dateFrom: DefaultValues.DATEFROM,
    dateTo: DefaultValues.DATETO
  });

  /* Different options for countries */
  const countryOptions = [
    { label: "Todos los países", value: "Todos los países" },
    { label: "Argentina", value: "Argentina" },
    { label: "Brasil", value: "Brasil" },
    { label: "Chile", value: "Chile" },
    { label: "Uruguay", value: "Uruguay" }
  ];

  /* diferentes opciones de precio*/
  const priceOptions = [
    { label: "Cualquier precio", value: "Cualquier precio" },
    { label: "$", value: 1 },
    { label: "$$", value: 2 },
    { label: "$$$", value: 3 },
    { label: "$$$$", value: 4 }
  ];

  /* diferentes opciones de tamaño*/
  const sizeOptions = [
    { size: "any", label: "Cualquier tamaño", value: "Cualquier tamaño" },
    { size: "small", label: "Hotel pequeño", value: "pequeños" },
    { size: "medium", label: "Hotel mediano", value: "medianos" },
    { size: "big", label: "Hotel grande", value: "grandes" }
  ];

  
  const handleFiltersChange = (e) => {
    const { name, value } = e.target;
    let newFilters = { ...filters };
    Object.keys(filters).forEach((key) => {
      if (key === name) {
        newFilters[name] = value;
        setFilters(newFilters);
        if (name === "prices") {
          newFilters[name] = parseInt(value, 10);
          setFilters(newFilters);
        }
        if (name === "dateTo" && value < newFilters.dateFrom) {
          alert("La fecha de check-out debe ser mayor al check-in");
          newFilters[name] = DefaultValues.DATETO;
          setFilters(newFilters);
        }
      }
    });
  };

  
  const handleFilterReset = () => {
    let newFilters = { ...filters };
    newFilters.countries = DefaultValues.COUNTRIES;
    newFilters.prices = DefaultValues.PRICES;
    newFilters.sizes = DefaultValues.SIZES;
    newFilters.dateFrom = DefaultValues.DATEFROM;
    newFilters.dateTo = DefaultValues.DATETO;
    setFilters(newFilters);
  };

  
  const checkFiltersActive = (filters) => {
    let filtersActive = false;
    if (
      filters.countries !== DefaultValues.COUNTRIES ||
      filters.prices !== DefaultValues.PRICES ||
      filters.sizes !== DefaultValues.SIZES
    ) {
      filtersActive = true;
    }
    return filtersActive;
  };

  
  const checkPriceCases = (cond, text) => {
    let price = text.DEFAULT;
    switch (cond) {
      case 1:
        price = text.PRICE1;
        break;
      case 2:
        price = text.PRICE2;
        break;
      case 3:
        price = text.PRICE3;
        break;
      case 4:
        price = text.PRICE4;
        break;
      default:
        break;
    }
    return price;
  };

  
  const HeaderPriceMsg = {
    DEFAULT: "a cualquier precio",
    PRICE1: "muy económicos",
    PRICE2: "económicos",
    PRICE3: "caros",
    PRICE4: "de lujo"
  };

  
  const PriceIcon = {
    DEFAULT: "",
    PRICE1: "$",
    PRICE2: "$$",
    PRICE3: "$$$",
    PRICE4: "$$$$"
  };

  return (
    <div className="App">
      <Header
        from={filters.dateFrom}
        to={filters.dateTo}
        filterCountry={filters.countries}
        filterPrice={filters.prices}
        filterSize={filters.sizes}
        filtersActives={checkFiltersActive(filters)}
        checkPrice={checkPriceCases}
        priceMsg={HeaderPriceMsg}
        defaultValues={DefaultValues}
      />
      <Filters
        handleSelected={handleFiltersChange}
        country={filters.countries}
        price={filters.prices}
        size={filters.sizes}
        dateTo={filters.dateTo}
        dateFrom={filters.dateFrom}
        handleReset={handleFilterReset}
        countryOptions={countryOptions}
        priceOptions={priceOptions}
        sizeOptions={sizeOptions}
      />
      <Hotels
        filterCountry={filters.countries}
        filterPrice={filters.prices}
        filterSize={filters.sizes}
        filterDateFrom={filters.dateFrom}
        filterDateTo={filters.dateTo}
        filtersActives={checkFiltersActive(filters)}
        defaultValues={DefaultValues}
        sizeOptions={sizeOptions}
        checkPrice={checkPriceCases}
        priceIcon={PriceIcon}
      />
    </div>
  );
    
}

export default App;