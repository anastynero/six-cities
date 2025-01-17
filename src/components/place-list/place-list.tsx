import PlaceCard from "../place-card/place-card";

const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;


function PlaceList(){
    return(
            <ul className="locations__list tabs__list">
              { CITIES.map((city) => <PlaceCard key={city} city={city}/>)}
            </ul>
    );
}

export default PlaceList;