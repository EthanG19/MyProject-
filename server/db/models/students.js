const Sequelize = require('sequelize')
const db = require('../database') 

module.exports = db.define('students', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false, 
        validate: {
            notEmpty: true 
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true 
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            isEmail: true 
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHxodR4Cwa3cALtayqyBrgrFx5qIWvoF-rOCGi7hcoGLaLj6aH',
    },
    gpa: {
        type: Sequelize.FLOAT,
        validate: {
            min: 1.0,
            max: 4.0
        }
    }
})
