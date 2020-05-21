
exports.seed = function(knex) {
  return knex('cars').truncate()
    .then(function () {
      return knex('cars').insert([
        { VIN: 12334141231 , make: 'Honda', model: 'Civic', mileage: 1400},
        { VIN: 24123123123 , make: 'Toyota', model: 'Camry', mileage: 1400},
        { VIN: 12342664444 , make: 'Tesla', model: 'x', mileage: 1400}
      ]);
    });
};
