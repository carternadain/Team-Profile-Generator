const Intern = require('..lib/Intern.js');

test('Create an Intern object', () => {
    const Intern = new Intern('Carter','1', 'email@address.com')
    expect(Intern.name).toBe('Carter')
    expect(Intern.id).toBe('1')
    expect(Intern.email).toBe('email@address.com')
})

test('get the Intern name', () => {
    const Intern = new Employee('Carter','1', 'email@address.com')
    expect(Intern.getName()).toBe('Carter')
})

test('get the Intern id', () => {
    const Intern = new Intern('Carter','1', 'email@address.com')
    expect(Intern.getId()).toBe('1')
})

test('get the Intern email', () => {
    const Intern = new Intern('Carter','1', 'email@address.com')
    expect(Intern.getEmail()).toBe('email@example.com')
})

test('get the Intern school', () => {
    const Intern = new Intern('Carter','1', 'email@address.com')
    expect(Intern.getRole()).toBe('Intern')
})

test('get the Intern role', () => {
    const Intern = new Intern('Carter','1', 'email@address.com')
    expect(Intern.getRole()).toBe('Intern')
})