const express = require('express');
const cors = require('cors');
const {mongoose} = require('./database');
let app = express();

// middlewares
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

// settings for files statics "public"
app.use(express.static('public'));

// routes module
app.use('/api/v1/products', require('./routes/product.route'));
app.use('/api/v1/transactions', require('./routes/transaction.route'));
app.use('/api/v1/espectadores', require('./routes/espectador.route'));
app.use('/api/v1/tickets', require('./routes/ticket.route'));

// setting
app.set('port', process.env.PORT || 3000);

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server started on port`, app.get('port'));
});


