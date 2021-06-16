import multer, { Multer } from 'multer';

/* const storage = multer.diskStorage({
    destination: (req: Express.Request, file: Express.Multer.File ,
    callback: ((error: Error | null, destination: string) => void)) => {
        callback(undefined, 'images/');
        console.log('saving image');
    },
    filename: (req: Express.Request, file: Express.Multer.File ,
        callback: ((error: Error | null, destination: string) => void)) => {
        callback(undefined, file.originalname);
        console.log('filename');
    }
}); */

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(undefined, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(undefined, file.originalname);
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

const upload: Multer = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5   // 5MB
    }
});

export default upload;
