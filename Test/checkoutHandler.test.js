const isValidPriceNMenu = require('../Handler/checkoutHandler');
const checkoutHandler = require('../Handler/checkoutHandler');



test('Item E is not on the menu',()=>{

    const item = [
        {"code": "E",
        "quantity" : "ba"},
        {"code": "A",
        "quantity" : "ba"},
    ]
    expect(isValidPriceNMenu(item)).toBe(false);
})

test('quantity input data is incorrect', () => {
    const item = [
        { "code": "B", "quantity": "ba" },
        { "code": "A", "quantity": "!" },
    ];

    expect(isValidPriceNMenu(item)).toEqual(false);
});