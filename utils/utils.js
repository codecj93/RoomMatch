const User = require('../../models/User')



function getEnumValues(model, field) {
    const attribute = model.rawAttributes[field];
    if (attribute && attribute.values) {
      return attribute.values;
    } else {
      throw new Error(`Enum values not found for field '${field}'`);
    }
  }
  
  module.exports = {
    getEnumValues
  }