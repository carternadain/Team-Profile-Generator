const Engineer = require('..lib/Engineer.js');

test('Create an Engineer object', () => {
    const engineer = new Engineer('Carter','1', 'email@address.com')
    expect(engineer.name).toBe('Carter')
    expect(engineer.id).toBe('1')
    expect(engineer.gitHub).toBe('carter@github.com')
})

test('get the engineer name', () => {
    const engineer = new Employee('Carter','1', 'email@address.com')
    expect(engineer.getName()).toBe('Carter')
})

test('get the engineer id', () => {
    const engineer = new Engineer('Carter','1', 'email@address.com')
    expect(engineer.getId()).toBe('1')
})

test('get the engineer email', () => {
    const engineer = new Engineer('Carter','1', 'email@address.com')
    expect(engineer.getEmail()).toBe('email@example.com')
})

test('get the engineer github', () => {
    const engineer = new Engineer('Carter','1', 'email@address.com')
    expect(engineer.gitHub()).toBe('Engineer')
})


test('get the engineer role', () => {
    const engineer = new Engineer('Carter','1', 'email@address.com')
    expect(engineer.getRole()).toBe('Engineer')
})