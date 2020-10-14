let keystone = require('keystone');
let Types = keystone.Field.Types;

let Allergens = new keystone.List(('Allergens' ), {
    hidden: true
});
Allergens.add({
name: { type: String }
});
Allergens.register();
