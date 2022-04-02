const Manager = require('..lib/Manager.js');

test('Create an Manger object', () => {
    const Manger = new Manger('Carter','1', 'email@address.com')
    expect(Manger.name).toBe('Carter')
    expect(Manger.id).toBe('1')
    expect(Manger.office).toBe('office number')
})

test('get the Manger name', () => {
    const Manger = new Employee('Carter','1', 'email@address.com')
    expect(Manger.getName()).toBe('Carter')
})

test('get the Manger id', () => {
    const Manger = new Manger('Carter','1', 'email@address.com')
    expect(Manger.getId()).toBe('1')
})

test('get the Manger email', () => {
    const Manger = new Manger('Carter','1', 'email@address.com')
    expect(Manger.getEmail()).toBe('email@example.com')
})

test('get the Manger office number', () => {
    const Manger = new Manger('Carter','1', 'email@address.com')
    expect(Manger.officeNumber()).toBe('Manger')
})

test('get the Manger role', () => {
    const Manger = new Manger('Carter','1', 'email@address.com')
    expect(Manger.role()).toBe('Manger')
})