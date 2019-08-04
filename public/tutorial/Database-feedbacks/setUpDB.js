module.exports.setUpDB = function(db, mysql, fs, tableCheck) {
	var DB;
	let dataObject;
	let tableToCreate = null;

	DB = db.connectToDB(mysql);

	tableToCreate = tableCheck.checkForNewTable(fs);
	dataObject = tableToCreate.pop();
	if (tableToCreate) {
		for (let i = 0; i < tableToCreate.length; i++) {
			if (createTable(DB, tableToCreate[i].name)) {
				dataObject.oscurodb.Tables[tableToCreate[i].pos].created = true;
				updateTableRecord(fs, JSON.stringify(dataObject));
			} else {
				//Nothing to handle
			}
		}
    }
    
    return DB;
};

function updateTableRecord(fs, data) {
	fs.writeFile(__dirname + '/recordTables.json', data, function(err) {
		if (err) throw err;

		console.log('Udated record Table files');
	});
}

function createTable(db, name) {
	var sqlQuery =
		'CREATE TABLE ' +
		name +
		' (id INT  AUTO_INCREMENT PRIMARY KEY,email VARCHAR(255) ,address VARCHAR(255),feedback VARCHAR(1000))';
	db.query(sqlQuery, function(err, result) {
		if (err) {
			throw err;
		} else {
			console.log('Results:' + result);
		}
	});

	return true;
}
