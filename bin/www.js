const app = require('../index');
const syncDb = require('./syncdb');

syncDb().then(_=> {
    console.log('Sync database!');
    app.listen(3000,() => {
        console.log('Example app listening on port 3000')
    });
})
