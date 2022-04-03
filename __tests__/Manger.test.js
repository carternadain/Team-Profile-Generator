const Manager = require('..lib/Manager.js');

test('Create an Manger object', () => {
    const manager = new Manager('Carter','1', 'email@address.com')
    expect(manager.name).toBe('Carter')
    expect(manager.id).toBe('1')
    expect(manager.office).toBe('office number')
})

test('get the Manger name', () => {
    const manager = new Employee('Carter','1', 'email@address.com')
    expect(manager.getName()).toBe('Carter')
})

test('get the Manger id', () => {
    const manager = new Manger('Carter','1', 'email@address.com')
    expect(manager.getId()).toBe('1')
})

test('get the Manger email', () => {
    const manager = new Manger('Carter','1', 'email@address.com')
    expect(manager.getEmail()).toBe('email@example.com')
})

test('get the Manger office number', () => {
    const manager = new Manger('Carter','1', 'email@address.com')
    expect(manager.officeNumber()).toBe('Manger')
})

test('get the Manger role', () => {
    const manager = new Manger('Carter','1', 'email@address.com')
    expect(manager.role()).toBe('Manger')
})