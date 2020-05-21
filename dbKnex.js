const knex=require('knex');
const dbconfig=require('./knexfile').development;

module.exports= knex(dbconfig);