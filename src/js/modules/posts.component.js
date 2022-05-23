import { Component } from "../services/component";
import { apiService } from "../services/api.services";
import { TransformService } from "../services/transform.service";
import { renderPost } from "../services/post.template";

export class PostsComponent extends Component {
    constructor(id, {loader}) {
        super(id);
        this.loader = loader;
    }

    init() {
        this.$el.addEventListener('click', buttonHandler.bind(this));
    }

    async onShow() {
        this.loader.show();
        const fbData = await apiService.fetchPosts();
        const posts = TransformService.fbObjectArray(fbData);
        const html = posts.map(post => renderPost(post, {withButton: true}));
        this.loader.hide();        
        this.$el.insertAdjacentHTML('afterbegin', html.join(''));
    }

    onHide() {
        this.$el.innerHTML = "";
    }

}

function buttonHandler(event) {
    const target = event.target;
    const id = target.dataset.id;
    const title = target.dataset.title;

    if (id) {
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const candidate = favorites.find(p => p.id === id);

        if (candidate) {    
            // удалить элемент
            target.textContent = 'Сохранить';
            target.classList.add('button-primary');
            target.classList.remove('button-danger');
            favorites = favorites.filter(p => p.id !== id);  //создаёт новый массив со всеми элементами, прошедшими проверку
        } else {
            // добавить элемент
            target.textContent = 'Удалить';
            target.classList.add('button-danger');
            target.classList.remove('button-primary');
            favorites.push({id, title});
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}