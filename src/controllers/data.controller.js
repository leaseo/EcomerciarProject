import gridData from '../responses/grid.json';
import imageData from '../responses/images.json'; 

export async function getGridData(req, res) {
    try {
        res.status(200).json({
            data: gridData
        });
    } catch (error) {
        res.status(403).json({
            error: error,
            message: 'Get Grid Data Error'
        })
    }
}

export async function getImageData(req, res) {
    try {
        res.status(200).json({
            data: imageData
        });
    } catch (error) {
        res.status(403).json({
            error: error,
            message: 'Get Grid Data Error'
        })
    }
}