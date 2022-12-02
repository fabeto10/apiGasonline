// const AdminBro = require( 'admin-bro');
// const AdminBroExpress = require('@admin-bro/express');
// const AdminBroMongoose = require('@admin-bro/mongoose')

// const express = require('express');
// const app = express();

// const mongoose = require('mongoose');

// const adminBro = new AdminBro ({
//     Databases: [],
//     rootPath: '/admin',
// });

// const run = async () => {
//     const connection = mongoose.connect('mongodb://localhost:27017/test', {
//         useNewUrlParser: true,
//     });
//     new AdminBro ({
//         Database: [connection]
//     });
// };
// run();


// const router = AdminBroExpress.buildRouter (adminBro)


// AdminBro.registerAdapter(AdminBroMongoose)

// app.use(adminBro.options.rootPath, router)
// app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))

