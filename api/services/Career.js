var schema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        validate: validators.isEmail(),
        unique: true
    },
    mobile: {
        type: String
    },
    experience: {
        type: Number
    },
    location: {
        type: String
    },
    resume: {
        type: String
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Career', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);