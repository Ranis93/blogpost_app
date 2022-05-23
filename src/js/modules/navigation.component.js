import { Component } from "../services/component";

class NavigationComponent extends Component {
    constructor(id) {
        super(id);
        this.tabs = [];
    }
    init() {
        this.$el.addEventListener('click', tabClickHandler.bind(this));
    }

    registerTabs(tabs) {
        this.tabs = tabs;
    }



}
function tabClickHandler(event) {

    if (event.target && event.target.classList.contains('tab')) {
        event.preventDefault();
        this.$el.querySelectorAll('.tab').forEach(item => {
            item.classList.remove('active');
        });
        event.target.classList.add('active');

        const activeTab = this.tabs.find(t => t.name === event.target.dataset.name);
        this.tabs.forEach(item => {
            item.component.hide();
        });
        activeTab.component.show();
        //console.log(activeTab);
    }
}

export {NavigationComponent};