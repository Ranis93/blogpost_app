import {HeaderComponent} from "./modules/header.component";
import {NavigationComponent} from "./modules/navigation.component";
import {CreateComponent} from "./modules/create.component";
import {FavoriteComponent} from './modules/favorite.component';
import {PostsComponent} from './modules/posts.component';
import {LoaderComponent} from "./modules/loader.component";

new HeaderComponent('header');
const navigation = new NavigationComponent('navigation');
const loader = new LoaderComponent('loader');

const posts = new PostsComponent('posts', {loader});
const create = new CreateComponent('create');
const favorite = new FavoriteComponent('favorite', {loader});

navigation.registerTabs([
    {name: 'create', component: create},
    {name: 'posts', component: posts},
    {name: 'favorite', component: favorite}
]);