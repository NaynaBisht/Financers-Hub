// // middlewares/uploadInv.js
// import multer from 'multer';
// import path from 'path';

// // Set up storage options for multer
// const storageInv = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploadInv/');  // Ensure 'uploadInv' folder exists
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + '-' + file.originalname);
//     }
// });
//  const storage = multer.diskStorage({
//      destination: function(req, file, cb) {
//          cb(null, 'uploadInv/'); // 'uploadInv/' is where files will be stored
//      },
//      filename: function(req, file, cb) {
//          cb(null, Date.now() + path.extname(file.originalname)); // Ensure unique file names
//      },
//  });

// // Initialize multer with storage configuration
// const uploadInv = multer({ storage: storageInv });

// export default uploadInv.fields
// //Export a middleware that handles multiple file uploads
// ([    { name: 'netWorthDocs', maxCount: 1 },
//     { name: 'sourceOfFundsDocs', maxCount: 1 },
//     { name: 'investmentExperienceDocs', maxCount: 1 },
// ]);

// middlewares/uploadInv.js
import multer from 'multer';
import path from 'path';

// Set up storage options for multer
const storageInv = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploadInv/');  // Ensure 'uploadInv' folder exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Initialize multer with storage configuration
const uploadInv = multer({ storage: storageInv });

// Export the initialized multer instance
export default uploadInv;
    