
import './RelatedCard.css'
import { Link } from "react-router-dom"

const RelatedCard = (props) => {
    // Updated the base URL
    const imageUrlBase = "http://localhost:5002/public/";
    const imageSrc = `${imageUrlBase}${props.item.category}/${props.item.image[0].filename}`;

    return ( 
        <div className="related__product__card__container">
            <div className="related__product__card__inner">
                <div className="related__product__image"> 
                    <img src={imageSrc} alt="item" className="product__img"/> 
                </div>
                <div className="related__product__card__detail">
                    <div className="related__product__name">
                        <Link to={`/item/${props.item.category}/${props.item._id}`}>
                           {props.item.name}
                        </Link>
                    </div>
                    <div className="related__product__description">
                        <span>{props.item.description}</span>
                    </div>
                    <div className="related__product__price">
                        <span>${props.item.price}</span>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default RelatedCard;
