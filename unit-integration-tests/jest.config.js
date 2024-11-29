/** @type {import('jest').Config}с */
const config = {
    verbose: true,
    reporters: ['default', ['./node_modules/@testomatio/reporter/lib/adapter/jest.js', { apiKey: process.env.TESTOMATIO }]]
};

module.exports = config;
