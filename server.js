const express = require('express');
const cors = require('cors') 
const app = express();
const port = 8000;
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors())

require('./server/routes/author.route')(app)
require('./server/config/mongoose.config')



app.listen(port, () => {
    console.log("Listening at Port 8000")
})