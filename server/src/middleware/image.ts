import multer, { Multer } from 'multer';

/** multer disk storage configuration */
const storage = multer.diskStorage({
    /** destination path ./public/images */
    destination: function(req, file, cb) {
        cb(undefined, './public/images/');
    },
    /** file name Date.now() + original file name */
    filename: function(req, file, cb) {
        cb(undefined, Date.now() + file.originalname);
    }
});

/* const fileFiler = (req: Express.Request, file: Express.Multer.File ,
    callback: ((error: Error | null, upload: boolean) => void)) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        callback(undefined, true);
    } else {
        callback(new Error('Only jpeg and png files are allowed'), false);
    }
}; */

/**
 * multer object that enables uploading files throught form data.
 * @param storage object that defines destination and filename
 * @param limits limits the size of a file, 25MB
 */
const upload: Multer = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 25
    }
});

export default upload;
