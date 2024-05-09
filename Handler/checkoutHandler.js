const items = require('./Enums/Items');
const priceHandler = require('./PriceHandler');


/**
 * Handles the checkout processe and send a JSON response.
 * @param {object} req - Product's code and quantity received from Customer.
 * @param {object} res - The response object.
 * @returns {number} The total price calculated.
 */

function checkoutHandler(req, res) {


        const menuObArr = req.body;

        try{
            if(!isValidPriceNMenu(menuObArr)){
                throw new Error('Input data is not valid');
            }


            totalPrice = priceHandler(menuObArr);
            const jsonResponse = {
                totalPrice : totalPrice
            };

            res.json(jsonResponse);
            
        }catch(error){
            res.status(400).json({ error: error.message });
        }
       
        
    }



/**
 * Transforms an array of objects representing product codes and quantities into a simplified object.<br>
 * {"code":"A","quantity":3} to {A:3,B:3}
 * @param {Array<object>} items - An array of objects containing product codes and quantities.
 * @returns {object} An object with product codes as keys and their quantities as values.
 */

/*
function SimplifyObj(items) {
    const SimplifiedObj = {};
    for (const item of items) {
        const code = item.code;
        const quantity = item.quantity;

        if(!isValidPrice(quantity)){
            throw new Error(`Invalid price for product ${code}: ${quantity}`);        }
        
        SimplifiedObj[code] = quantity


        }
        return SimplifiedObj;
    }    
*/


/**
 * Check if the input is a valid number
 * @param {number} num 
 * @returns {boolean} 
 */
    function isValidPriceNMenu(objArr) {

        for(const item of objArr){
            if(!(item.code in items)){
                return false;
            }
            const q = item.quantity
            if(q < 0 || typeof q !== 'number' || isNaN(q) || !isFinite(q)){
                return false;
            }

            
        }
        return true;
    

}




module.exports = checkoutHandler;
module.exports = isValidPriceNMenu;