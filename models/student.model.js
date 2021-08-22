module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: Sequelize.STRING
        },
        surname: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        dob: {
            type: Sequelize.DATE
        }
    });

    return Student;
};