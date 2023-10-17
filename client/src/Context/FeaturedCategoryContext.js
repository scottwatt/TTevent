import { createContext } from "react";

import cog from '../asset/Products/cloth/men/cog.png'
import planner from '../asset/Products/cloth/women/SpacePlanner.png'
import truck from '../asset/Products/cloth/kids/Truck.png'

export const FeatureCategoryContext = createContext([
    {
        name: "Resources",
        image: cog,
        url: '/resources',
        id: 1
    },
    {
        name: "Space Planning",
        image: planner,
        url: '/space-planner',
        id: 2
    },
    {
        name: "Delivery Rates",
        image: truck,
        url: '/delivery-rates',
        id: 3
    }
])