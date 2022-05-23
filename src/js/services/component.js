class Component {
    constructor (id) {
      this.$el = document.getElementById(id);  
      this.init();            // запускается сразу при инициализации {Component}
    }
    init() {}                // lifecycle hook для {Component}

    onShow() {}              // lifecycle hook запуск при показе модуля

    onHide() {}              // lifecycle hook запуск при скрытии модуля

    hide() {
      this.$el.classList.add('hide');
      this.onHide();
    }

    show() {
      this.$el.classList.remove('hide');
      this.onShow();
    }
}

export {Component};