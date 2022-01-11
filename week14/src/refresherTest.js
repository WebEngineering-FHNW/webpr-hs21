import {TestSuite} from "./kolibri/util/test.js";

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

testSuite.run();
