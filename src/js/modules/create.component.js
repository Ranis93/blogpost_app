import { Component } from "../services/component";
import { Form } from "../services/form";
import { Validators } from "../services/validators";
import { apiService } from "../services/api.services";

export class CreateComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        this.$el.addEventListener('submit', submitHandler.bind(this));
                                                                    // валидация данных и валидаторы .
        this.form = new Form(this.$el, {
            title: [Validators.required],
            fulltext: [Validators.required, Validators.minLength(5)]
        });
    } 
}

async function submitHandler(event) {
    event.preventDefault();

    if (this.form.isValid()) {
        const formData = {
            type: this.$el.type.value,
            date: new Date().toLocaleDateString(),
            ...this.form.value()
        };

        await apiService.createPost(formData);

        this.form.clear();
        alert('Запись создана в базе данных');
    }
}

