import { BbqSauceImg, ChocoShake, CokeImage, FreshJuice, GarlicSauce, Julienned, Shake, Spinach } from "../Enums/Images"


const Products = [
    {
        title: 'Choice of Add On',
        productItems: [
            { id: 0, image: Julienned, name: 'Pepper  Julienned', price: 2.30, },
            { id: 1, image: Spinach, name: 'Baby Spinach', price: 4.70, },
            { id: 2, image: FreshJuice, name: 'Fresh Juice', price: 2.50, },
            { id: 3, image: CokeImage, name: 'Coca Cola', price: 4.40, },
        ],
    },
    {
        title: 'Extra Sauce',
        productItems: [
            { id: 0, image: BbqSauceImg, name: 'BBQ Sauce', price: 2.30, },
            { id: 1, image: GarlicSauce, name: 'Garlic Sauce', price: 2.30, },
        ],
    },
]

const MoreItems = [{ image: Shake },
{ image: ChocoShake }]

export {
    Products,
    MoreItems
}