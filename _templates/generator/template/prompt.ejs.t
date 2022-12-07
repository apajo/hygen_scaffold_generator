---
to: <%= h.root %>/.hygen/_templates/<%= name %>/<%= action || 'new' %>/prompt.js
force: true
---
module.exports = [
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
