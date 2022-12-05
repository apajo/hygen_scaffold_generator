const ScanDir = require('./scandir');
const fs = require('fs');
const fse = require('fs-extra');

class TemplateGenerator {
    generate (file: string, className: string, namespace: string, h: any) {
        if (!fs.statSync(file).isFile()) {
            console.error('Is not file: ' + file);
            return;
        }

        var template = {
            name: file,
            content: fs.readFileSync(file),
        };

        template.content = FileTransformer.transformMap(
            template.content,
            [
                {search: className, replace: '<%= className %>'},
                {search: className.toLocaleLowerCase(), replace: '<%= h.changeCase.lower(className) %>'},
                {search: namespace, replace: '<%= namespace %>'},
            ]
        )


        if (template.content.toString().trim().substring(0, 3) !== '---') {
            var transformed = FileTransformer.transformMap(
                template.name,
                [
                    {search: className, replace: '<%= className %>'},
                    {search: className.toLocaleLowerCase(), replace: '<%= h.changeCase.lower(className) %>'},
                ]
            );

            template.content = (
                `---
                    to: <%= locals.cwd %>/${transformed.replace(h.attributes.source + '/', '')}
                    ---
                    
                    `).replace(/\  /g, '') + template.content;
        }

        template.name = FileTransformer.transformMap(
            template.name,
            [
                {search: className, replace: 'Object'},
                {search: className.toLocaleLowerCase(), replace: 'object'},
            ]
        )

        fs.writeFileSync(file, template.content);

        const renameTo = template.name + '.ejs.t';

        if (file.substring(-6) !== '.ejs.t') {
            fs.renameSync(file, renameTo);
        }

    }

    scanDir (s: string): [] {
        return ScanDir.getFilesSync(s);
    };

    copydir (from: string, to: string): void {
        fse.copySync(from, to);
    };
}

export default TemplateGenerator;