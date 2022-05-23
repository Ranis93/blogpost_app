export class Validators {
    static required (value = "") {
        return value && value.trim();       // возвращает true, если value непустая строка и не строка из пробелов
    }

    static minLength(length) {
        return value => {
            return value.length >= length;
        };
    }
}