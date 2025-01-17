function PlaceCard(props : any){
    const city = props.city;
    return(
        <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>{city}</span>
                </a>
              </li>
    );
}

export default PlaceCard;