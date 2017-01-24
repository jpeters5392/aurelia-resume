export class EmployerValueConverter {
    toView(value) {
        return Object.keys(value).map((key) => {
            return {
                name: key,
                titles: value[key],
            };
        });
    }
}