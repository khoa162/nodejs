const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataTransferSchema = new Schema({  
  Distance: { type: Number },
  CreatedAt: { type: Date, default: Date.now },
  UpdatedAt: { type: Date, default: Date.now }
});

DataTransferSchema.statics.dataTransfer = function(data) {
  const DataTransfer = mongoose.model('DataTransfer');

  return new Promise((resolve, reject) => { 
	this.model('DataTransfer').create({ Distance: data }).
						then(rs => { resolve(rs); }).
						catch(error => { reject(error); })
					});
}

mongoose.model('DataTransfer', DataTransferSchema);
