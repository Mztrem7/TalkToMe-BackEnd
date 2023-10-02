//configuração (json)

require('dotenv').config();

const config = {
    development:{
        client:'postgresql',
        connection:{
            host: process.PGHOST,
            database:process.env.PGDATABASE,
            user:process.env.PGUSER,
            password:process.env.PGPASSWORD,
            ssl:true,
        },
    },
};

module.exports = config;