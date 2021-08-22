
module.exports = {
    HOST: "localhost",
    USER: "simiyu",
    PASSWORD: "Root@123",
    DB: "studentdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };