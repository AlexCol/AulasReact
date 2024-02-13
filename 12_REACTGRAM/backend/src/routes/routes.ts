import Router, { Request, Response } from 'express';
import userRoutes from './UserRoutes';
import multer from 'multer';
import photosRoutes from './PhotoRoutes';
const router = Router();

router.use('/users', userRoutes);
router.use('/photos', photosRoutes);

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });
// router.get('/testefile', upload.single('file'), (req: Request, res: Response) => {
//     try {
//         // Verifique se o arquivo foi enviado corretamente
//         if (!req.file) {
//             return res.status(400).json({ message: 'No file provided.' });
//         }

//         // Pegando os dados binários da imagem
//         const imageData = req.file.buffer;
//         // Mostre os dados binários no console
//         console.log('Binary image data:', imageData);

//         // Devolva a imagem na resposta
//         res.set({
//             'Content-Type': 'image/jpeg', // ou 'image/png' para PNG
//             'Content-Length': imageData.length
//         });
// 		res.status(201).send(imageData);
//     } catch (error) {
//         console.error('Error uploading image:', error);
//         return res.status(500).json({ message: 'Internal server error.' });
//     }
// });

export default router;