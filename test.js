const assert = require('assert');
const capitalize = require('./');

function describe (s, cb) {
  console.log(`describe ${s}`);
  cb();
  console.log();
}

function it (s, cb) {
  console.log(`* it ${s}`);
  cb();
}

describe('capitalize', () => {
  it('should capitalize a string', () => {
    assert.equal(capitalize('foo bar'), 'Foo bar');
  });

  it('should not change case', () => {
    assert.equal(capitalize('Foo bar'), 'Foo bar');
  });

  it('should not handle errors for you', () => {
    let err;
    try {
      capitalize(42);
    } catch (e) {
      err = e;
    }
    assert.ok(err instanceof TypeError);
  });
});
