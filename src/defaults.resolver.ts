const ScanDir = require('./scandir');
const FileTransformer = require('./file.transformer');
const fs = require('fs');
const fse = require('fs-extra');

class DefaultsResolver {
    static namespace (path: string)
    {
        const files = ScanDir.getFilesSync(path);
        const namespaces = [];

        files.forEach((file: string) => {
            try {
                console.log(file)
                let contents = fs.readFileSync(file, 'utf8');
                console.log(contents);

            }catch (error) {
                console.error(error.message)
            }
        })
    }
}

export default DefaultsResolver;