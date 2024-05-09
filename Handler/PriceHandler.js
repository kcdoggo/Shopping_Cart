const Items = require("./Enums/Items");
const SpecialItems = require("./Enums/specialItem");

/**
 * Calculates the total price based on item information.
 * @param {object} ItemInfo - Information about items and their quantities.
 * @returns {number} The total price calculated.
 */
function PriceHandler(ItemInfo) {
    

    let totalPrice = 0;

    for (const item of ItemInfo) {
        const specialItem = SpecialItems[item.code]; 

        if (specialItem) {

            const sp_quantity = specialItem.quantity;
            const sp_price = specialItem.price;

            const set = Math.floor(item.quantity / sp_quantity); 
            const modulo = item.quantity % sp_quantity;
            totalPrice += set * sp_price + modulo * Items[item.code]; 
        }else{
            totalPrice+= item.quantity * Items[item.code] ; 
        }

    }
            
    return totalPrice;

}

module.exports = PriceHandler;