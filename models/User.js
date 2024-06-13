const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}
//email,city,password,hobbies,lifestyle,course
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                customValidator(value) {
                    if (!/^[a-zA-Z0-9-_@]+$/i.test(value)) {
                        throw new Error('Username can only contain letters, numbers, and -_@');
                    }
                },
                notEmpty: true,
                len: [8, 15]
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: true
        },
        country: {
            type: DataTypes.STRING,
            allowNull: false
        },
        course: {
            type: DataTypes.ENUM,
            values: ['Philosophy', 'Psychology', 'Biology', 'History', 'Business Administration', 'Computer Science', 'Communications', 'Political Science', 'Foreign Language', 'Education', 'Art', 'Engineering', 'Economics', 'Mathematics', 'Marketing', 'Nursing', 'Environmental Science', 'Sociology'],
            allowNull: false
        },
        hobby1: {
            type: DataTypes.ENUM,
            values: ['Sports', 'Museums', 'Reading', 'Dance', 'Gardening', 'Painting', 'Writing', 'Drawing', 'Musical Instrument', 'Hiking', 'Exercise', 'Baking', 'Cooking', 'Yoga', 'Knitting', 'Games and Puzzles', 'Shopping', 'Photography', 'Blogging'],
            allowNull: false
        },
        hobby2: {
            type: DataTypes.ENUM,
            values: ['Sports', 'Museums', 'Reading', 'Dance', 'Gardening', 'Painting', 'Writing', 'Drawing', 'Musical Instrument', 'Hiking', 'Exercise', 'Baking', 'Cooking', 'Yoga', 'Knitting', 'Games and Puzzles', 'Shopping', 'Photography', 'Blogging'],
            allowNull: false
        },
        hobby3: {
            type: DataTypes.ENUM,
            values: ['Sports', 'Museums', 'Reading', 'Dance', 'Gardening', 'Painting', 'Writing', 'Drawing', 'Musical Instrument', 'Hiking', 'Exercise', 'Baking', 'Cooking', 'Yoga', 'Knitting', 'Games and Puzzles', 'Shopping', 'Photography', 'Blogging'],
            allowNull: false
        },
        question1: {
            type: DataTypes.ENUM('Messy', 'Clean'),
            allowNull: false
        },
        question2: {
            type: DataTypes.ENUM('Night Owl', 'Early Sleeper'),
            allowNull: false
        },
        question3: {
            type: DataTypes.ENUM('Partygoer', 'Homebody'),
            allowNull: false
        },
        question4: {
            type: DataTypes.ENUM('Gym Rat', 'Allergic to the Gym'),
            allowNull: false
        },
        question5: {
            type: DataTypes.ENUM('TV Connoisseur', 'TV is not really my thing'),
            allowNull: false
        },
        question6: {
            type: DataTypes.ENUM('Always playing music', 'Peace and Quiet'),
            allowNull: false
        },
        question7: {
            type: DataTypes.ENUM('Enjoys the Outdoors', 'Not a nature fan'),
            allowNull: false
        },
        question8: {
            type: DataTypes.ENUM('Fall or Spring type of person', 'Winter or Summer type of person'),
            allowNull: false
        },
        question9: {
            type: DataTypes.ENUM('Marvel', 'DC'),
            allowNull: false
        },
        question10: {
            type: DataTypes.ENUM('Early Riser', 'Late Sleeper'),
            allowNull: false
        },

    },
           
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            },
        },

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }

);

module.exports = User;
