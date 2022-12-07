import path = require('path');
import TemplateGenerator from './template.generator';


module.exports = {
    templates: path.resolve(`${__dirname}/../_templates`),
    dir: path.resolve(`${__dirname}/../../`),
    helpers: {
        root: path.resolve(`${__dirname}/../../`),
        relative: (from: string, to: string) => path.relative(from, to),
        src: () => __dirname + '/.hygen',
        generator: TemplateGenerator,
    }
};