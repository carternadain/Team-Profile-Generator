const Engineer = require('..lib/Engineer.js');

test('Create an engineer object', () => {
    const employee = new Employee('Carter','1', 'email@address.com')
    expect(employee.name).toBe('Carter')
    expect(employee.id).toBe('1')
    expect(employee.gitHub).toBe('carter@github.com')
})

test('get the engineer name', () => {
    const engineer = new Employee('Carter','1', 'email@address.com')
    expect(employee.getName()).toBe('Carter')
})

test('get the engineer id', () => {
    const engineer = new Employee('Carter','1', 'email@address.com')
    expect(engineer.getId()).toBe('1')
})

test('get the engineer email', () => {
    const engineer = new Employee('Carter','1', 'email@address.com')
    expect(engineer.getEmail()).toBe('email@example.com')
})

test('get the engineer github', () => {
    const engineer = new Employee('Carter','1', 'email@address.com')
    expect(engineer.gitHub()).toBe('engineer')
})


test('get the engineer role', () => {
    const engineer = new Employee('Carter','1', 'email@address.com')
    expect(engineer.getRole()).toBe('engineer')
})