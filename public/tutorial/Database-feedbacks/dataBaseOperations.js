module.exports.QueryfeedBackOpertations = function (con) {

    this.insertdata = (data) => {

        let sql = "INSERT INTO userFeedback (email, feedBack) VALUES ('" + data["remail"] + "', '" + data["feedBack"] + "')";
        this.queryExecuter(sql);

    };

    this.queryExecuter = (query_) => {
        if (query_) {
            con.query(query_, function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Number of Record inserted" + result.affectedRows);
                }
            });
        }
    };
    this.select=()=>{
        
    };

}