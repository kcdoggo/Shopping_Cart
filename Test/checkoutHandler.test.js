const checkoutHandler = require('../Handler/checkoutHandler');



test('Item E is not on the menu',()=>{

    const item = [
        {"code": "E",
        "quantity" : "ba"},
        {"code": "A",
        "quantity" : "ba"},
    ]
    expect(checkoutHandler.isValidPriceNMenu(item)).toBe(false);
})

test('quantity input data is incorrect', () => {
    const item = [
        { "code": "B", "quantity": "ba" },
        { "code": "A", "quantity": "!" },
    ];

    expect(checkoutHandler.isValidPriceNMenu(item)).toEqual(false);
});