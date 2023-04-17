import React from "react"

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT" 
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={`../images/${props.item.coverImg}`} className="pic-1" alt="swimmer"/>
            <div className="card--stats">
                <img src="../images/star.png" className="star-1" alt="katie-star"/>
                <span className="rating">{props.item.stats.rating}</span>
                <span className="number">({props.item.stats.reviewCount}) • </span>
                <span className="country">{props.item.location}</span>
            </div>
                <p className="katie-lessons" >{props.item.title}<br/></p>
                <p className="katie-price"><span className="from">From ${props.item.price}</span>/person</p>
            </div>
    )
}