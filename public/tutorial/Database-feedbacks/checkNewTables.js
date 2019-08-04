

module.exports.checkForNewTable=function(fs){
         
         let data = (fs.readFileSync(__dirname+"/recordTables.json")).toString();
         
         var dataObject =JSON.parse(data);
         
         let tables=dataObject.oscurodb.Tables;
        
         var newTables=[];
                
         for(let i = 0; i<tables.length;i++){
            
            if(!(tables[i].created)){
                 newTables.push({"name":tables[i].name,"pos":i});
             }
         }
         
         newTables.push(dataObject);

         return newTables;
};