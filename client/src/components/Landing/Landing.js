import { Link } from 'react-router-dom';
import { Button } from '@mui/material'; // Assuming you are using MUI
import eventEquipmentImage from '../../asset/brand/hero.jpeg';
import './Landing.css';


const Landing = () => {
    return (
        <div className="landing__container">
            <div className="landing__image__container">
                <img className="landing__image" src={eventEquipmentImage} alt="Event Equipment" />
                <div className="landing__header__container">
                    <div className="landing__header">
                        <h3 className="landing__header__promo">SPECIAL EVENT PACKAGES AVAILABLE</h3>
                        <h1 className="landing__header__main">Top-Quality Equipment for Every Occasion</h1>
                        <Link to="/rental-catalog">
                            <Button variant='outlined' sx={[
                                { width: '230px', height: '50px', borderRadius: '20px', fontWeight: '700', backgroundColor: 'white', borderColor: 'black', color: 'black' },
                                { '&:hover': { backgroundColor: "black", color: "#FFE26E", borderColor: 'black' } }
                            ]}>
                                VIEW RENTAL CATALOG
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
