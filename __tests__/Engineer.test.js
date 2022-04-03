const Engineer = require('../lib/Engineer');

test('get engineer github', () => {
    const engineer = new Engineer('carter', 1, 'example@email.com', 'carternadain')
    expect(engineer.github).toEqual(expect.any(String))
})