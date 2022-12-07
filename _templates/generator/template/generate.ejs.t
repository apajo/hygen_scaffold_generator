---
to: <%= h.root %>/.hygen/_templates/<%= name %>/<%= action || 'new' %>/generate.log
force: true
source: <%= h.root %>/.hygen/_templates/<%= name %>/<%= action || 'new' %>
---

<% console.log(h.generator); -%>


<%  h.generator.copyDir(cwd, locals.attributes.source);  %>

<%  sourcePath = locals.templates  -%>
Scanning files <%= sourcePath %> files:

<%  list = h.generator.scanDir([sourcePath, name, action].join('/') + '/**/*[!\.ejs\.t]');  %>
<% console.log('Found files: ' + list.length); %>
Found <%= list.length %> files:

<%  for (var i = 0; i < list.length; i++){ -%>
    <%= console.log(i + ': ' + list[i]); -%>

    <%  h.generator.generate(list[i], className, namespace, locals); -%>
    <%= i %>: <%= list[i] -%>:
<% } -%>