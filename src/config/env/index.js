const {config} = require('dotenv')
config()

const development = {
    port:process.env.PORT,
    DB_NAME: process.env.DB_NAME,
    DB_PASS: process.env.DB_PASS,
    DB_USER: process.env.DB_USER,
    DB_HOST: process.env.DB_HOST,
    DB_DIALECT: process.env.DB_DIALECT || 'mysql',
    JWT_SECRET: process.env.SECRET || 'secret',
    JWT_ALGORITHMS: process.env.JWT_ALGORITHMS,
    URL_SWAGGER: process.env.URL_SWAGGER,
    MAIL_PORT: process.env.MAIL_PORT,
    MAIL_HOST: process.env.MAIL_HOST,
    MAIL_PASS: process.env.MAIL_PASS,
    MAIL_USER: process.env.MAIL_USER,
    URL_FORGOT_PASS: process.env.URL_FORGOT_PASS,
    CONTACT_LINK: process.env.CONTACT_LINK,
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    AWS_SECRET_ACCESS: process.env.AWS_SECRET_ACCESS,
    AWS_REGION: process.env.AWS_REGION,
    AWS_BUCKET: process.env.AWS_BUCKET,
    AWS_URL:process.env.AWS_URL
}

module.exports = development;