var mongoose = require('mongoose')

var TrackSchema = new mongoose.Schema({
	name:{type:String, default:''},
    url: {type:String, default:''}, 
    description: {type:String, default:''}, 
    image: {type:String, default:''}, 
	slug:{type:String, default:''},
	timestamp:{type:Date, default: Date.now},
	profile: {type:mongoose.Schema.Types.Mixed, default:{}}
})

TrackSchema.methods.summary = function(){
	var summary = {
		id: this._id.toString(),
		profile: this.profile,
		name:this.name,
        url: this.url,
        image: this.image,
        slug:this.slug,
        description: this.description,
        timestamp:this.timestamp
	}

	return summary
}

module.exports = mongoose.model('TrackSchema', TrackSchema)

