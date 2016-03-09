const express    = require('express');
const app        = express();
const port 	 = process.env.PORT || 8080;

const path       = require('path');
const publicPath = path.resolve(__dirname, 'public');

app.set('port', port);
app.use(express.static(publicPath));
app.set('view', path.join(__dirname, 'view'));
//app.set('view engine', 'ejs');

// Start server
app.listen(port, function() {
 console.log('Server started on port: '+port); 
});
