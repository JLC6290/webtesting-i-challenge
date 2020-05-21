const enhancer = require('./enhancer.js');
// test away!

test('repair function to restore durability to 100', () => {
    const repairItem = { name: 'henry', durability: 50, enhancement: 10 };
    const res = enhancer.repair(repairItem)
    expect(res.durability).toEqual(100);
});

test('succeed function increments enhancement by 1 if < 20', () => {
    const succeedItem = { name: 'item2', durability: 70, enhancement: 15};
    const res = enhancer.succeed(succeedItem);
    if(succeedItem.enhancement >= 20){
        expect(res.enhancement).toEqual(20);
    }else{
        expect(res.enhancement).toEqual(succeedItem.enhancement + 1);
    }
})

test('fail function passes all conditions', () => {
    const failItem = { name: 'item3', durability: 50, enhancement: 15 }
    const res = enhancer.fail(failItem);
    if(failItem.enhancement < 15){
        expect(res.durability).toEqual(failItem.durability - 5);
    }else if(failItem.enhancement >= 15 && failItem.enhancement < 17){
        expect(res.durability).toEqual(failItem.durability - 10);
    }else{
        expect(res.durability).toEqual(failItem.durability - 10);
        expect(res.enhancement).toEqual(failItem.enhancement - 1);
    }
})

test('get function adds enhancement to name if enhancement > 0', () => {
    const getItem = { name: 'item4', durability: 50, enhancement: 5 };
    const res = enhancer.get(getItem);
    if(res.enhancement > 0){
        expect(res.name).toBe(`[+${res.enhancement}] item4`);
    }else{
        expect(res.name).toBe('item4');
    }
})