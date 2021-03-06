var mongoose = require('mongoose')

var BugSchema = new mongoose.Schema({
    profile: {type:String, default:''},
    track: {type:String, default:''},
    title: {type:String, default:''},
    slug: {type:String, default:''},
    when_where: {type:String, default:''},
    symptom: {type:String, default:''},
    // response: {type:String, default:''},
    timestamp: {type:Date, default:Date.now}
})

BugSchema.methods.summary = function(){
	var summary = {
        id: this._id,
        profile: this.profile,
        track: this.track,
        title: this.title,
        slug: this.slug,
        when_where: this.when_where,
        symptom: this.symptom,
        detail: this.detail,
        // response: this.response,
        timestamp: this.timestamp
	}

	return summary
}

module.exports = mongoose.model('BugSchema', BugSchema)