// repeat this file for all tables/schemas/collections for now
// till i figure out how to dynamically connect to tables using the mongoose data dict 

/* not using the following for now 06-28-2015 
exports.getSchema = function(recname, nluser){
    
    if (recname == 'nl_deptxwalk')
    {
        console.log(recname);
        var schema = new Object;
        schema = {
            DESCR: String,
            DEPTID: Number,
            DEPT_DESCR: String,
            VENDOR: String,
            EXPENSE_TYPE: String,
            ACCOUNT_DESCR: String,
            ACCOUNT2: Number
        };
        return schema;
    }
};
*/
                           
exports.getSelectList = function(nluser, recname){
    
    if (recname == 'nl_deptxwalk')
    {
        console.log('in metadata controller: ' + recname);
        
        var fieldSelection = new Object;
        // down the road query the meta data object to figure out the select list based on user ACL
        fieldSelection['dept_name'] = 1;
        fieldSelection['_id'] = 0;
        fieldSelection['vendor_id']=1;
        fieldSelection['account_name'] = 1;
        
        /*selectList = {
            _id: 0,
            DESCR: 1,
            DEPTID: 1,
            DEPT_DESCR: 1,
            VENDOR: 0,
            EXPENSE_TYPE: 0,
            ACCOUNT_DESCR: 0,
            ACCOUNT2: 0
        };*/
        return fieldSelection;
    }
};
// collection: = '<tablename>' required to override the default setting of looking for a pluralized table