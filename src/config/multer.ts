import multer from "multer";
import path from "path";
import crypto from "crypto";

export default {
    storage: multer.diskStorage({
        //local onde os arquivos serão guardados
        destination: path.resolve(__dirname, "..", "..", "uploads"),

        /**
         *
         * @param request objeto request do axios
         * @param file  todos os dados do arquivo
         * @param callback
         */
        filename(request, file, callback) {
            const hash = crypto.randomBytes(6).toString("hex");

            const fileName = `${hash}-${file.originalname}`;

            callback(null, fileName);
        },
    }),
};
