class Person {
    public static instance: Person;
    constructor() {
        if (typeof Person.instance ) {
            return Person.instance;
        }
        Person.instance = this;
        return this;
    }
}

export default Person;
