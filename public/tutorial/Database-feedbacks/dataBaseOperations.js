module.exports.QueryfeedBackOpertations = function (con) {
    this.insertdata = data => {
        let sql =
            "INSERT INTO userFeedback (email, feedBack) VALUES ('" + data['remail'] + "', '" + data['feedBack'] + "')";
        this.queryExecuter(sql, null, null);
    };

    this.queryExecuter = (query_, callBack, errorHandler) => {
        if (query_) {
            con.query(query_, function (err, result) {
                if (err) {
                    if (errorHandler) {
                        errorHandler(err);
                    } else {
                        console.log(err);
                    }
                    return -1;
                } else {
                    console.log('Result:' + result);
                    if (callBack) {
                        callBack(result);
                    }
                }
            });
        }
    };
    this.select = () => { };
};


module.exports.feedBackCounter = 0;


module.exports.getFeedBacks = function (fs, queryExecuter_) {
    let prom = new Promise(function (resolve, reject) {
        var results = queryExecuter_('SELECT * FROM userFeedback', resolve, reject);
    });

    prom.then(results => {
        let countFrom = 0;
        if (results !== -1 || results !== undefined) {
    
            var temp = "";
            for (let i = countFrom; i < results.length; i++) {
                let data =
                    "<div class='card'>" +
                    "<div class='card-header'>" +
                    "<a class='card-link' data-toggle='collapse' href='#collapseOne'>" +
                    "<span class='card-header'>User:</span>" + results[i].email.split('@')[0] +
                    '</a>' +
                    '</div>' +
                    "<div id='collapseOne' class='collapse show' data-parent='#accordion'>" +
                    "<div class='card-body'>" +
                    "<span class='card-header bg-success'>FeedBack:</span>" + results[i].feedback +
                    '</div>' +
                    '</div>' +
                    '</div>';
                temp += data;

            }

            fs.writeFile(__dirname + '/userFeedbacks.html', temp, 'utf8', function (err) {
                if (err) {
                    console.log('WARNING:Failed to append data!!');
                } else {
                    console.log('Data Append operation completed with 0 error.');
                }
            });
        }
    });
};
