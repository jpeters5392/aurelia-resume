export class CategoryValueConverter {
    toView(value) {
        return Object.keys(value).map((key) => {
            return {
                name: key,
                technologies: value[key],
            };
        });
    }
}