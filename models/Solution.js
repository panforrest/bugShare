var mongoose = require('mongoose')

var SolutionSchema = new mongoose.Schema({
	profile:{type:String},
	bug:{type:String},
	text:{type:String},    
    timestamp: {type:String, default:Date.now}
})

SolutionSchema.methods.summary = function(){
	var summary = {
        id:this._id,
        profile:this.profile,
        bug:this.bug,
        text:this.text,
        timestamp: this.timestamp
	}

	return summary
}

module.exports = mongoose.model('SolutionSchema', SolutionSchema)