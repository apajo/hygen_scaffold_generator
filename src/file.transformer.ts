class FileTransformer {
    static transformMap (content: string, mappings: TransformMappings[]) {
        mappings.forEach((map) => {
            content = FileTransformer.transform(
                content,
                map.search,
                map.replace
            )
        });

        return content;
    }

    static transform (content: string, from: string, to: string) {
        const pattern = new RegExp(from, 'g');
        return content.toString().replace(pattern, to);
    }
}

interface TransformMappings {
    search: string;
    replace: string;
}

module.exports = FileTransformer;