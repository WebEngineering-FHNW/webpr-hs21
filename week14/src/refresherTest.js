import {TestSuite} from "./kolibri/util/test.js";
import "./kolibri/util/array.js"

const testSuite = TestSuite("refresher");

testSuite.add("reduce", assert => {
    const names = ["Florian","Katrin","Nils"];
    const join = ary =>
        ary.length === 0
        ? ""
        : ary.reduce( (acc, cur) => acc + " " + cur);
    assert.is(join(names), "Florian Katrin Nils");

    assert.is(join([]), "");
});

testSuite.add("splice", assert => {
    let names = ["Florian","Katrin","Nils"];
    names.splice(0,1);
    assert.isTrue(names.eq(["Katrin","Nils"]));

    names = ["Florian","Katrin","Nils"];
    names.splice(0,0);
    assert.isTrue(names.eq(names));

    names = ["Florian","Katrin","Nils"];
    names.splice(0,0, "Aaron","Manuel");
    assert.isTrue(names.eq(["Aaron","Manuel","Florian","Katrin","Nils"]));
});

testSuite.add("callback", assert => {

    const benchmark = callback => {
        const start = 0;
        callback();
        const end   = 10;
        return end - start;
    }
    assert.is( benchmark( () => 1+1 ), 10 );

});

testSuite.run();
