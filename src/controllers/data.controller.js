// import gridData from '../responses/grid.json';
// import imageData from '../responses/images.json'; 
const Request = require('request');

export async function getGridData(req, res) {
    try {
        res.redirect('https://jsonplaceholder.typicode.com/posts');
    } catch (error) {
        res.status(403).json({
            error: error,
            message: 'Get Grid Data Error'
        })
    }
}

export async function getImageData(req, res) {
    try {
        const page = !req.body.page ? 0 : req.body.page;
        const pageSize = 10;

        const offset = page * pageSize;
        const limit = pageSize;
        Request.get("https://jsonplaceholder.typicode.com/photos", (error, response, body) => {
            if(error) {
                return console.dir(error);
            }
            let data = JSON.parse(body);
            res.json({
                data: slice(data, offset, offset+limit),
                totalPages: Math.ceil(body.length / limit)
            })
        });
        // res.redirect('https://jsonplaceholder.typicode.com/photos');

    } catch (error) {
        res.status(403).json({
            error: error,
            message: 'Get Grid Data Error'
        })
    }
}

function slice(array, start, end) {
    let a = [];
    let len = array.length;
    if (start < 0) start = len + start;
    if (end < 0) end = len + end;
    if (start < end) {
        for (let i = start; i < end; i++) {
            a.push(array[i]);
        }
    } else if (start === undefined && end !== undefined) {
        for (let i = end; i < len; i++) {
            a.push(array[i]);
        }
    } else if (end === undefined && start !== undefined) {
        for (let i = start; i < len; i++) {
            a.push(array[i]);
        }
    } else if (start > end || start === end) {
        return [];
    }
    return a;
}