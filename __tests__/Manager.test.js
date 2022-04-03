const Manager = require('../lib/Manager'); 

test('get manager officeNumber', () => {
    const manager = new Manager('Carter', 1, 'example@email.com', 1)
    expect(manager.officeNumber).toEqual(expect.any(Number))
})