import multer from 'multer';
import path from 'path';

// Multer setup for file storage
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/'); // 'uploads/' is where files will be stored
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Ensure unique file names
    },
});

const upload = multer({ storage: storage });

export default upload;
