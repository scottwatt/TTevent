import './ItemCard.css';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartItemsContext } from "../../../Context/CartItemsContext";
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { WishItemsContext } from '../../../Context/WishItemsContext';

const ItemCard = (props) => {
    const [isHovered, setIsHovered] = useState(false)

    const imageUrlBase = "http://localhost:5002/public/";

    const image1 = props.item.image?.[1]?.filename;
    const image2 = props.item.image?.[0]?.filename;

    const imgSrc1 = image1 ? `${imageUrlBase}${props.item.category}/${image1}` : null;
    const imgSrc2 = image2 ? `${imageUrlBase}${props.item.category}/${image2}` : null;
    
    const  cartItemsContext  = useContext(CartItemsContext)
    const wishItemsContext = useContext(WishItemsContext)

    const handleAddToWishList = () => {
        wishItemsContext.addItem(props.item)
    }

    const handleAddToCart = () => {
        cartItemsContext.addItem(props.item, 1)
    }

    return ( 
        <div className="product__card__card">
        <div className="product__card">
            <div className="product__image" 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            > 
                {isHovered ? 
                    (imgSrc1 ? <img src={imgSrc1} alt="item" className="product__img"/> : null) :
                    (imgSrc2 ? <img src={imgSrc2} alt="item" className="product__img"/> : null)
                }
            </div>
                <div className="product__card__detail">
                    <div className="product__name">
                        <Link to={`/item/${props.item.category}/${props.item._id}`}>
                           {props.item.name}
                        </Link>
                    </div>
                    <div className="product__description">
                        <span>{props.item.description}</span>
                    </div>
                    <div className="product__price">
                        <span>${props.item.price}</span>
                    </div>
                    <div className="product__card__action">
                        <IconButton onClick={handleAddToWishList} sx={ {borderRadius: '20px', width: '40px', height: '40px', /* borderWidth: '3px', borderStyle: 'solid', borderColor: '#FFE26E' */ }  }>
                            <FavoriteBorderIcon sx={{width: '22px', height: '22px', color: 'black'}}/>
                        </IconButton>
                        <IconButton onClick={handleAddToCart} sx={ {borderRadius: '20px', width: '40px', height: '40px' /*  borderWidth: '3px', borderStyle: 'solid', borderColor: '#FFE26E' */}}>
                            <AddShoppingCartIcon sx={{width: '22px', height: '22px', color: 'black'}}/>
                        </IconButton >
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ItemCard;