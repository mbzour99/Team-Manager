const mongoose = require('mongoose');
const Teams = new mongoose.Schema({
    name: { type: String,
    minlength: [2,"name must be at least 2 char."],
    require:["naem must be required!!"]
    },
    position: { type: String
        },

    status: 
        { game1: {type:Number}, game2:{type:Number} ,game3:{type:Number}}
   
        
}, { timestamps: true });
module.exports.Team = mongoose.model('Teams', Teams);