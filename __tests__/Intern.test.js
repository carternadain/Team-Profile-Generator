const Intern = require('../lib/Intern');

test('get intern school', () => {
    const intern = new Intern('Carter', 1, 'email@email.com', 'University Of Arizona')
    expect(intern.school).toEqual(expect.any(String))
})