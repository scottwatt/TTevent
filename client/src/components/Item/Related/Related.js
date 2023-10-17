import { useState, useEffect } from 'react';
import axios from 'axios'; 
import RelatedCard from '../../Card/RelatedCard/RelatedCard';
import './Related.css';

const Related = (props) => {
    
    const [ menItems, setMenItems ] = useState()
    const [ womenItems, setWomenItems ] = useState()
    const [ kidsItems, setKidsItems ] = useState()

    useEffect(() => {
        axios.get("http://localhost:5002/api/items")
            .then(res => {
                setMenItems(res.data.filter((item) => item.category === "tables"))
                setKidsItems(res.data.filter((item) => item.category === "chairs" ))
                setWomenItems(res.data.filter((item) => item.category === "tableware"))
            })
            .catch(err => console.log(err))
    }, [])
    
    return ( 
            <div className="related__products">
                <div className="related__header__container">
                    <div className="related__header">
                        <h2>Recommended Products</h2>
                    </div>
                    <div className="related__header__line">
                            
                    </div>
                </div>
                <div className="related__card__container">
                    <div className="related__product__card">
                        { menItems && props.category === "tables" && menItems.map((item) => <RelatedCard item={item}/>)}
                        { womenItems && props.category === "tableware" && womenItems.map((item) => <RelatedCard item={item}/>)}
                        { kidsItems && props.category === "chairs" && kidsItems.map((item) => <RelatedCard item={item}/>)}
                        
                    </div>
                </div>
            </div>
     );
}
 
export default Related;