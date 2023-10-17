import { useEffect, useState } from 'react';
import { TabTitle } from '../../utils/General';
import axios from "axios";
import ShopCategory from './Container/ShopCategory';
import './Shop.css';
import ReactLoading from 'react-loading';

const Shop = () => {
    TabTitle("Shop - SHEMA")
    const [ tableItems, setTableItems ] = useState()
    const [ tablewareItems, setTablewareItems ] = useState()
    const [ chairsItems, setChairsItems ] = useState()
    const [ dancefloorItems, setDancefloorItems ] = useState()
    const [ loading , setLoading ] = useState(true) 

    useEffect(() => {
        axios.get("http://localhost:5002/api/items")
            .then(res => {
                setTableItems(res.data.filter((item) => item.category === "tables"))
                setTablewareItems(res.data.filter((item) => item.category === "tableware" ))
                setChairsItems(res.data.filter((item) => item.category === "chairs"))
                setDancefloorItems(res.data.filter((item) => item.category === "dancefloor"))
                setLoading(false)
            })
            .catch(err => console.log(err))
        window.scrollTo(0, 0)
    
    }, [])

    return ( 
        <div className="shop__contianer">
            {loading && <ReactLoading type="balls" color='#FFE26E'  height={100} width={100} className='container h-100 w-10 justify-self-center align-self-center m-auto'/>}
            {tableItems && <ShopCategory name="Tables" key="table" items={tableItems}/>}
            {tablewareItems && <ShopCategory name="Tableware" key="D" items={tablewareItems}/>}
            {chairsItems && <ShopCategory name="Chairs and Barstools" key="chairs" items={chairsItems}/>}
            {dancefloorItems && <ShopCategory name="Dancefloor" key="dancefloor" items={dancefloorItems}/>}

        </div>
     );
}
 
export default Shop;