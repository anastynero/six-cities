import PlaceCard from "../place-card/place-card";

function PlacesList(){
    return(
        <div className="cities__places-list places__list tabs__content">
                <PlaceCard 
                image="img/apartment-01.jpg" 
                price={120} 
                name="Beautiful &amp; luxurious apartment at great location" 
                type="Apartment" 
                isBookmarked={true} 
                />
                <PlaceCard 
                image="img/room.jpg" 
                price={80} 
                name="Beautiful Place" 
                type="Apartment" 
                isBookmarked={true} 
                />
                <PlaceCard 
                image="img/apartment-02.jpg" 
                price={100} 
                name="Beautiful Place" 
                type="Apartment" 
                isBookmarked={true} 
                />
                <PlaceCard 
                image="img/apartment-03.jpg" 
                price={100} 
                name="Beautiful Place" 
                type="Apartment" 
                isBookmarked={true} 
                />
                <PlaceCard 
                image="img/room.jpg" 
                price={100} 
                name="Beautiful Place" 
                type="Apartment" 
                isBookmarked={true} 
                />
              </div>
    );
}

export default PlacesList;