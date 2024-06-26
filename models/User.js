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
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
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
        Preference1: {
            type: DataTypes.ENUM,
            values: ['Messy', 'Clean'],
            allowNull: false
        },
        Preference2: {
            type: DataTypes.ENUM,
            values:['Night Owl', 'Early Sleeper'],
            allowNull: false
        },
        Preference3: {
            type: DataTypes.ENUM,
            values: ['Partygoer', 'Homebody'],
            allowNull: false
        },
        Preference4: {
            type: DataTypes.ENUM,
            values: ['Gym Rat', 'Allergic to the Gym'],
            allowNull: false
        },
        Preference5: {
            type: DataTypes.ENUM,
            values: ['TV Connoisseur', 'TV is not really my thing'],
            allowNull: false
        },
        Preference6: {
            type: DataTypes.ENUM,
            values: ['Always playing music', 'Peace and Quiet'],
            allowNull: false
        },
        Preference7: {
            type: DataTypes.ENUM,
            values: ['Enjoys the Outdoors', 'Not a nature fan'],
            allowNull: false
        },
        Preference8: {
            type: DataTypes.ENUM,
            values: ['Fall or Spring type of person', 'Winter or Summer type of person'],
            allowNull: false
        },
        Preference9: {
            type: DataTypes.ENUM,
            values: ['Marvel', 'DC'],
            allowNull: false
        },
        Preference10: {
            type: DataTypes.ENUM,
            values: ['Early Riser', 'Late Sleeper'],
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
