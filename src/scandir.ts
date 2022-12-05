import {glob} from "glob";
import * as G from "glob";

class ScanDir {
    private static options: G.IOptions = {
        nodir: true
    };

    static getFiles (pattern: string) {
        var prom = new Promise((resolve, reject) => {
            var files = glob( pattern, this.options,function( err: any, files: [] ) {

                if (err) {
                    return reject(err);
                }

                resolve (files);
            });
        });

        return prom;
    }

    static getFilesSync (pattern: string) {
        return glob.sync( pattern, this.options);
    }
}

module.exports = ScanDir;