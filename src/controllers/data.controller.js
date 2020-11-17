// import gridData from '../responses/grid.json';
// import imageData from '../responses/images.json'; 
var request = require('request');

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
        res.redirect('https://jsonplaceholder.typicode.com/photos');
    } catch (error) {
        res.status(403).json({
            error: error,
            message: 'Get Grid Data Error'
        })
    }
}