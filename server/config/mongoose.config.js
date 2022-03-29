const mongoose = require("mongoose")
const dbName = 'authors_db';
mongoose.connect(`mongodb+srv://root:root@merndbstackcluster.qdwat.mongodb.net/${dbName}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));