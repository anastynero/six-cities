import LocationItem from "../location-item/location-item";

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;


function LocationList(){
  return(
    <ul className="locations__list tabs__list">
      { CITIES.map((city) => <LocationItem key={city} city={city}/>)}
    </ul>
  );
}

export default LocationList;