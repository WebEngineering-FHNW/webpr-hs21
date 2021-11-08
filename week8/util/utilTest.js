// requires util.js

// extending the prototype of many objects
test("util-times1", assert => {

    const collect = [];

    (10).times( n => collect.push(n) );

    assert.equals(collect.length ,  10);
    assert.equals(collect[0]     ,   0);
    assert.equals(collect[9]     ,   9);

    // if we only had an array-equals ... *sigh*

}) ;


test("util-times2", assert => {

    const collect = (10).times( n => n+1 );

    assert.equals(collect.length , 10);
    assert.equals(collect[0]     , 1);
    assert.equals(collect[9]     , 10);

});
