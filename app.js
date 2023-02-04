const http = require('http');
const url = require('url');
const moment = require('moment');

// function to calculate change in date if any
function calulateDateChange(query) {
    const operation = query.operation;
    let value = parseInt(query.value);
    const dayOrWeek = query.dayOrWeek;
    let date = query.date;

    //converting today to today's date
    if (date === 'today'){
        date = moment().format('DD-MMM-YYYY');
    }
    //converting week into days for easy calculation
    if (dayOrWeek === 'week'){
        value = parseInt(7*value);
    }

    //based on add/subtract performing action
    if (operation === 'add'){
        return moment(date).add(value, 'days').format('DD-MMM-YYYY');
    } else if(operation === 'subtract'){
        return moment(date).subtract(value, 'days').format('DD-MMM-YYYY');
    }

}


const server = http.createServer((req, res) => {
    
    const query = url.parse(req.url, true).query;
    let result = '';
    result = calulateDateChange(query);
        
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(result);

});

server.listen(8080, () => {
    console.log('Server listening on http://localhost:8080');
});
