'use strict';

class nodeBilder {
    constructor(tag, classNames, text) {
        this.tagName = tag;
        this.classNames = classNames;
        this.text = text;
        this.init();
    }

    init() {
        this.element = document.createElement(this.tagName);
        this.element.classList.add(...this.classNames);
        this.inner = document.createElement('span');
        this.inner.innerText = this.text;
        this.element.append(this.inner);
    }

    get getElement() {
        return this.element;
    }
}

class LiCreator extends nodeBilder {
    constructor(text) {
        super('li', ['li_class'], text);
    }
}

class UlCreator extends nodeBilder {
    constructor(text) {
        super('ul', ['ul_class'], text);
        this.addHandler();
    }

    addHandler() {
        this.inner.addEventListener('click', () => {
            this.element.classList.toggle('active');
        })
    }
}

const creator = (tag) => {
    return (className, text) => {
        const element = document.createElement(tag);
        element.classList.add(className);
        element.innerText = text;
        return element;
    }
}

const ulCreator = creator('ul')


export { creator, ulCreator, UlCreator, LiCreator }