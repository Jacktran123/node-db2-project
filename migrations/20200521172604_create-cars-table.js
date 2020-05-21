
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl=>{
    tbl.increments('Id');
    tbl.integer('VIN',20).unique().notNullable();
    tbl.text('make',20).notNullable();
    tbl.text('model',20).notNullable();
    tbl.integer('mileage',20).notNullable();
    tbl.text('Status of the Title',20);
    tbl.text('Transmission Type',20);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExist('cars')
};
