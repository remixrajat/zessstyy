// const { Relationship, Text } = require('@keystonejs/fields');
let keystone = require('keystone');
let Types = keystone.Field.Types;
// let mongoose = require('mongoose');

let Cart = new keystone.List('Cart');

Cart.add({
    userId: {type: Types.Relationship, ref: 'User'},
    foodId: {type: Types.Relationship, ref: 'Dishes'},
    itemNum: {type: Number}
            
    }
);

// Cart.add({
//     userId: {type: Types.Relationship, ref: 'User'}
//     });

//     Cart.schema.add({ food: mongoose.Schema.Types.Mixed }); // you should define outside .add()

//     Cart.defaultColumns = 'userId, food';

Cart.register();