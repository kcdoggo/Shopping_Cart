const priceHandler = require('../Handler/PriceHandler');


describe('Item A costs 50 per unit but it costs 140 for 3 units ' ,()=>{
    const itemA = {
        A : 7
    }
    test('7 of Item A cost 330',()=>{
        expect(priceHandler(itemA)).toBe(330);
    });

})


describe('Item B costs 35 per unit but it costs 60 for 2 units ' ,()=>{
    const itemB = {
        B : 5
    }
    test('5 of Item B cost 155',()=>{
        expect(priceHandler(itemB)).toBe(155);
    });

})


describe('Item C costs 25 and Item D costs 12 ' ,()=>{
    const items = {
        A : 2, 
        B : 3,
        C : 4,
        D : 1
    }
    test('2 of A, 3 of B, 4 of C, 1 of D is ',()=>{
        expect(priceHandler(items)).toBe(307);
    });

})
