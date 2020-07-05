const uuid = require('uuid')

const members = [
    {   id:uuid.v4(),
        name: 'john doe',
        email:'john@gmail.com',
        status:'active'
    },
     {
        id:uuid.v4(),
        name: 'jane doe',
        email:'jane@gmail.com',
        status:'inactive'
    },
     {
        id:uuid.v4(),
        name: 'bob smith',
        email:'bob@gmail.com',
        status:'inactive'
    },
]

    module.exports = members