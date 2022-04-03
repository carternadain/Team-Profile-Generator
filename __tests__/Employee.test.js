const Employee = require('..lib/Employee.js');


test('Create an employee object', () => {
    const employee = new Employee('Carter','1', 'email@address.com')
    expect(employee.name).toBe('Carter')
    expect(employee.id).toBe('1')
    expect(employee.email).toBe('email@address.com')
})

test('get the employee name', () => {
    const employee = new Employee('Carter','1', 'email@address.com')
    expect(employee.getName()).toBe('Carter')
})

test('get the employee id', () => {
    const employee = new Employee('Carter','1', 'email@address.com')
    expect(employee.getId()).toBe('1')
})

test('get the employee email', () => {
    const employee = new Employee('Carter','1', 'email@address.com')
    expect(employee.getEmail()).toBe('email@example.com')
})

test('get the employee role', () => {
    const employee = new Employee('Carter','1', 'email@address.com')
    expect(employee.getRole()).toBe('Employee')
})