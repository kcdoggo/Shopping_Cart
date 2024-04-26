const Items = require("./Enums/Items");
const SpecialItems = require("./Enums/specialItem");

/**
 * Calculates the total price based on item information.
 * @param {object} ItemInfo - Information about items and their quantities.
 * @returns {number} The total price calculated.
 */
function PriceHandler(ItemInfo) {
    

    let totalPrice = 0;

    for (const [key, value] of Object.entries(ItemInfo)) {
        const specialItem = SpecialItems[key]; 

        if (specialItem) {
            const set = Math.floor(value / specialItem.quantity); 
            const modulo = value % specialItem.quantity;
            totalPrice += set * specialItem.price + modulo * Items[key]; 
        }else{
            totalPrice+= value * Items[key] ; 


        }

    }
            
    return totalPrice;

}

module.exports = PriceHandler;