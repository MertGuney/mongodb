var mongoose = require('mongoose').mongo.MongoClient
mongoose.connect('mongodb+srv://mert-guney:12345mg@cluster0-u1dh6.gcp.mongodb.net/mert-guney',
    { useUnifiedTopology: true, useNewUrlParser: true },
    function (eer, cli) {
        if (!eer) {
            console.log("bağlantı başarılı");

            var dib = cli.db('mert-guney');
            var buCol= dib.collection('Database');
            
           // buCol.insertOne( { ad: "murat", soyad:"veli", no:2222 } );
           // buCol.deleteOne({ad:"ali"});
           // buCol.updateOne({no:1525, $set:{ad:"veli",soyad:"meli"}})

            buCol.find({}).toArray(function (er, result) {
                if (er) throw er;
                console.log(result);
            });
        }
        if (eer) {
            throw eer;
        }
    });