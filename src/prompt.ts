import {Prompter} from "@node_modules/hygen/src/types";
import DefaultsResolver from "@src/defaults.resolver";

interface TemplatePrompt {
    type: string;
    name: string;
    message: string;
    default?: string
    defaultResolver?: any;
}


module.exports = [
    {
        type: 'input',
        name: 'name',
        message: "Template group:",
        default: ""
    },
    {
        type: 'input',
        name: 'action',
        message: "Template name:",
        default: ""
    },
    {
        type: 'input',
        name: 'namespace',
        message: "Namespace (eg: com.my_domain):",
        default: ""
    },
    {
        type: 'input',
        name: 'className',
        message: "Class name (Main part of classname):",
        default: ""
    },
    {
        type: 'input',
        name: 'tag',
        message: "Tag (usually lowercase classname):",
        default: ""
    }
]