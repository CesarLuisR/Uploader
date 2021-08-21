const multer = require('multer');
const path = require('path');

const multerConf = multer({
    storage: multer.diskStorage({
        destination: path.join(__dirname, '../upload'),
        filename: (req, file, callback) => {
            callback(null, file.originalname);
        }
    }),
    dest: path.join(__dirname, '../upload'),
}).single("file");

module.exports = multerConf;