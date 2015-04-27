// repeat this file for all tables/schemas/collections for now
// till i figure out how to dynamically connect to tables using the mongoose data dict 

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var deptxwalk = new Schema({
	DESCR: String,
	DEPTID: Number,
	DEPT_DESCR: String,
	VENDOR: String,
	EXPENSE_TYPE: String,
	ACCOUNT_DESCR: String,
	ACCOUNT2: Number
},{collection: 'deptxwalk'}); 

// collection: = '<tablename>' required to override the default setting of looking for a pluralized table


// not sure why this but i guess it's registering the scheam to the table i want
module.exports = mongoose.model('deptxwalk',deptxwalk);