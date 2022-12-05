import path = require('path');
import TemplateGenerator from './template.generator';

module.exports = {
    templates: path.resolve(`${__dirname}/../_templates`),
    dir: path.resolve(`${__dirname}/../../`),
    helpers: {
        root: path.resolve(`${__dirname}/../../`),
        relative: (from: string, to: string) => path.relative(from, to),
        src: () => __dirname + '/.hygen',
        generator: new TemplateGenerator(),
        // scandir: (s: string) => {
        //     return ScanDir.getFilesSync(s);
        // },
        // copydir: (from: string, to: string) => {
        //     fse.copySync(from, to);
        // },
        // transform: (file: string, className: string, namespace: string, h: any) => {
        //     if (!fs.statSync(file).isFile()) {
        //         console.error('Is not file: ' + file);
        //         return;
        //     }
        //
        //     var template = {
        //         name: file,
        //         content: fs.readFileSync(file),
        //     };
        //
        //     template.content = FileTransformer_.transformMap(
        //         template.content,
        //         [
        //             {search: className, replace: '<%= className %>'},
        //             {search: className.toLocaleLowerCase(), replace: '<%= h.changeCase.lower(className) %>'},
        //             {search: namespace, replace: '<%= namespace %>'},
        //         ]
        //     )
        //
        //
        //     if (template.content.toString().trim().substring(0, 3) !== '---') {
        //         var transformed = FileTransformer_.transformMap(
        //             template.name,
        //             [
        //                 {search: className, replace: '<%= className %>'},
        //                 {search: className.toLocaleLowerCase(), replace: '<%= h.changeCase.lower(className) %>'},
        //             ]
        //         );
        //
        //         template.content = (
        //             `---
        //             to: <%= locals.cwd %>/${transformed.replace(h.attributes.source + '/', '')}
        //             ---
        //
        //             `).replace(/\  /g, '') + template.content;
        //     }
        //
        //     template.name = FileTransformer_.transformMap(
        //         template.name,
        //         [
        //             {search: className, replace: 'Object'},
        //             {search: className.toLocaleLowerCase(), replace: 'object'},
        //         ]
        //     )
        //
        //     fs.writeFileSync(file, template.content);
        //
        //     const renameTo = template.name + '.ejs.t';
        //
        //     if (file.substring(-6) !== '.ejs.t') {
        //         fs.renameSync(file, renameTo);
        //     }
        // }
    }
};