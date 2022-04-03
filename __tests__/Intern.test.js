const Intern = require('..lib/Intern.js');

test('Create an Intern object', () => {
    const intern = new Intern('Carter','1', 'email@address.com')
    expect(intern.name).toBe('Carter')
    expect(intern.id).toBe('1')
    expect(intern.email).toBe('email@address.com')
})

test('get the Intern name', () => {
    const intern = new Employee('Carter','1', 'email@address.com')
    expect(intern.getName()).toBe('Carter')
})

test('get the Intern id', () => {
    const intern = new Intern('Carter','1', 'email@address.com')
    expect(intern.getId()).toBe('1')
})

test('get the Intern email', () => {
    const intern = new Intern('Carter','1', 'email@address.com')
    expect(intern.getEmail()).toBe('email@example.com')
})

test('get the Intern school', () => {
    const intern = new Intern('Carter','1', 'email@address.com')
    expect(intern.getRole()).toBe('Intern')
})

test('get the Intern role', () => {
    const intern = new Intern('Carter','1', 'email@address.com')
    expect(intern.getRole()).toBe('Intern')
})