const fs = require('fs');


const itemsCollection = [
    {
        "_id": "630b7c690dd4ac34455cb262",
        "name": "Rectangular Banquet Table",
        "category": "tables",
        "color": "brown",
        "type": "table",
        "description": "Rectangular Banquet Table",
        "price": 699,
        "size": [
            "4'",
            "6'",
            "8'"
        ],
        "highlights": [
            "Rectangular",
            "Banquet",
            "Table",
        ],
        "image": [
            {
                "fieldname": "images",
                "originalname": "rectangletable.jpg",
                "encoding": "7bit",
                "mimetype": "image/jpeg",
                "destination": "./public/tables",
                "filename": "Rectangle-Banquet-Tables.jpg",
                "path": "public\\tables\\Rectangle-Banquet-Tables.jpg",
                "size": 48662
            },
            
        ],
        "createdAt": "2022-08-28T14:32:09.906Z",
        "updatedAt": "2022-08-28T14:32:09.906Z",
        "__v": 0
    },
    {
        "_id": "630bdc280dd6605053c3f066",
        "name": "Round Table",
        "category": "tables",
        "color": "brown",
        "type": "table",
        "description": "Round Table",
        "price": 1181,
        "size": [
            '24" Stand Up',
            '24" Sit Down',
            '30" Sit Down',
            '30" Stand Up',
            '36" Sit Down',
            '36" Stand Up',
            'Round 48"',
            'Round 54"',
            'Round 60"',
            'Round 66"',
            'Round 72"'
            
        ],
       
        "image": [
            {
                "fieldname": "images",
                "originalname": "zegna-1.jpg",
                "encoding": "7bit",
                "mimetype": "image/jpeg",
                "destination": "./public/tables",
                "filename": "RoundTable.png",
                "path": "public\\tables\\RoundTable.png",
                "size": 26300
            },
            
        ],
        "createdAt": "2022-08-28T21:20:40.056Z",
        "updatedAt": "2022-08-28T21:20:40.056Z",
        "__v": 0
    },
    {
        "_id": "630bdcd70dd6605053c3f06a",
        "name": "Square Table",
        "category": "tables",
        "color": "brown",
        "type": "table",
        "description": "Plywood top tables with folding legs.",
        "price": 163,
        "size": [
            '30" X 30"',
            '36" Square Stand Up',
            '48"',
            '60"'
        ],
        "image": [
            {
                "fieldname": "images",
                "originalname": "SquareTable.png",
                "encoding": "7bit",
                "mimetype": "image/jpeg",
                "destination": "./public/tables",
                "filename": "SquareTable.png",
                "path": "public\\tables\\SquareTable.png",
                "size": 49872
            },
           
        ],
        "createdAt": "2022-08-28T21:23:35.374Z",
        "updatedAt": "2022-08-28T21:23:35.374Z",
        "__v": 0
    },
    {
        "_id": "630c0ba6cacae4f0ab3bd5b0",
        "name": "Linens",
        "category": "tableware",
        "color": "white",
        "type": "",
        "description": "White Seamless Polyester",
        "price": 1940,
        "size": [
            "XS",
            " S",
            " M",
            " L",
            " XL"
        ],
        "highlights": [
            "White",
            " Polyester",
        ],
        "detail": "White Seamless Polyester Round Tablecloth.",
        "image": [
            {
                "fieldname": "images",
                "originalname": "Linens.png",
                "encoding": "7bit",
                "mimetype": "image/jpeg",
                "destination": "./public/tableware",
                "filename": "Linens.png",
                "path": "public\\tableware\\Linens.png",
                "size": 100712
            },
            
        ],
        "createdAt": "2022-08-29T00:43:18.501Z",
        "updatedAt": "2022-08-29T00:43:18.501Z",
        "__v": 0
    },
    {
        "_id": "630c0cf3cacae4f0ab3bd5b4",
        "name": "Flatware",
        "category": "tableware",
        "color": "Silver",
        "type": "Utensils",
        "description": "Silver Utensils",
        "price": 1610,
        "size": [
            "",
        ],
        "highlights": [
            "Silver",
            " Fork",
            " Spoon",
            " Knife",
            " Salad Fork",
            " Soup Spoon"
        ],
        "detail": "Stainless Steel Heavy Weight Flatware.",
        "image": [
            {
                "fieldname": "images",
                "originalname": "flatware.png",
                "encoding": "7bit",
                "mimetype": "image/jpeg",
                "destination": "./public/tableware",
                "filename": "flatware.png",
                "path": "public\\tableware\\flatware.png",
                "size": 255238
            },
           
        ],
        "createdAt": "2022-08-29T00:48:51.208Z",
        "updatedAt": "2022-08-29T00:48:51.208Z",
        "__v": 0
    },
    {
        "_id": "630c0d7ccacae4f0ab3bd5b7",
        "name": "Simple China",
        "category": "tableware.png",
        "color": "white",
        "type": "China",
        "description": "Crisp and contemporary, these dinner plates are an essential for mealtime.",
        "price": 937,
        "size": [
            ""
        ],
        "highlights": [
            "White",
            " Porcelain",
            " Dinner Plate",
        ],
        "detail": "White Porcelain Plate",
        "image": [
            {
                "fieldname": "images",
                "originalname": "SimpleChina.png",
                "encoding": "7bit",
                "mimetype": "image/jpeg",
                "destination": "./public/tableware",
                "filename": "SimpleChina.png",
                "path": "public\\tableware\\SimpleChina.png",
                "size": 39380
            },
           
        ],
        "createdAt": "2022-08-29T00:51:08.496Z",
        "updatedAt": "2022-08-29T00:51:08.496Z",
        "__v": 0
    },
    {
        "_id": "630c1455cacae4f0ab3bd5d6",
        "name": "White Plastic Chair",
        "category": "chairs",
        "color": "white",
        "type": "chair",
        "description": "Plastic white chair",
        "price": 878,
        "size": [
            ""
        ],
        "highlights": [
            "White",
            " Plastic",
            " Chair",
            " Folding",
        ],
        "detail": "White Wedding Folding Chair",
        "image": [
            {
                "fieldname": "images",
                "originalname": "WhiteChair.png",
                "encoding": "7bit",
                "mimetype": "image/jpeg",
                "destination": "./public/chairs",
                "filename": "WhiteChair.png",
                "path": "public\\chairs\\WhiteChair.png",
                "size": 11674
            },
        ],
        "createdAt": "2022-08-29T01:20:21.742Z",
        "updatedAt": "2022-08-29T01:20:21.742Z",
        "__v": 0
    },
    {
        "_id": "630c1609cacae4f0ab3bd5e0",
        "name": "Wooden Folding Chairs",
        "category": "chairs",
        "color": ["black","brown", "white"],
        "type": "chair",
        "description": "Wooden Folding Chairs",
        "price": 91,
        "size": [
            "",
        ],
        "highlights": [
            "Wooden Construction",
            " Padded Seat",
           
        ],
        "detail": "Wood Construction with padded seats",
        "image": [
            {
                "fieldname": "images",
                "originalname": "WoodChair.png",
                "encoding": "7bit",
                "mimetype": "image/jpeg",
                "destination": "./public/chairs",
                "filename": "WoodChair.png",
                "path": "public\\chairs\\WoodChair.png",
                "size": 149094
            },
        ],
        "createdAt": "2022-08-29T01:27:37.394Z",
        "updatedAt": "2022-08-29T01:27:37.394Z",
        "__v": 0
    },
    {
        "_id": "630c17d9cacae4f0ab3bd5ef",
        "name": "School House Black Chair",
        "category": "chairs",
        "color": "black",
        "type": "chair",
        "description": "Black Stacking Chairs",
        "price": 227,
        "size": [
            ""
        ],
        "highlights": [
            "Metal",
            " Stacking Chair",
            " Black/Gold",
        ],
        "detail": "Metal with the black hills gold finish",
        "image": [
            {
                "fieldname": "images",
                "originalname": "MetalChair.png",
                "encoding": "7bit",
                "mimetype": "image/jpeg",
                "destination": "./public/chairs",
                "filename": "MetalChair.png",
                "path": "public\\chairs\\MetalChair.png",
                "size": 46290
            },
        ],
        "createdAt": "2022-08-29T01:35:21.206Z",
        "updatedAt": "2022-08-29T01:35:21.206Z",
        "__v": 0
    },
    {
        "_id": "630c1989772ad2014230cd4a",
        "name": "Dancefloor",
        "category": "dancefloor",
        "color": "brown",
        "type": "dancefloor",
        "description": "Dancefloor",
        "price": 189,
        "size": [
            "9'x12'",
            "12'x12'",
            "15'x16'",
            "18'x24'"
        ],
        "highlights": [
            "Wood",
            " Dancefloor",

        ],
        "detail": "Wooden Dancefloor",
        "image": [
            {
                "fieldname": "images",
                "originalname": "Dancefloor.png",
                "encoding": "7bit",
                "mimetype": "image/jpeg",
                "destination": "./public/dancefloor",
                "filename": "Dancefloor.png",
                "path": "public\\dancefloor\\Dancefloor.png",
                "size": 45516
            },
           
        ],
        "createdAt": "2022-08-29T01:42:33.824Z",
        "updatedAt": "2022-08-29T01:42:33.824Z",
        "__v": 0
    },
]

itemsCollection.forEach(item => {
    delete item._id;
});

fs.writeFileSync('output.json', JSON.stringify(itemsCollection, null, 2));
