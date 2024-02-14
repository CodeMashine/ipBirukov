import data from './data.js';
import { UlCreator, LiCreator } from './nodeCreator.js';
const root = document.querySelector('.root');

const addView = (array) => {
    array.map((el) => {
        if (el.node) {
            el.view = new UlCreator(el.name).getElement;
        } else {
            el.view = new LiCreator(`${el.name}(${el.price})`).getElement;
        }
        return el;
    });
    return array;
};

const sortData = (array) => {
    return array
        .reduce((acc, cur) => {
            cur.children = array.filter((i) => i.head === cur.id);
            cur.children.sort((a, b) => a.sorthead - b.sorthead);
            cur.children.forEach((el) => cur.view.append(el.view));
            acc.push(cur);
            return acc;
        }, []).filter((i) => !i.head);
};

const render = (parent, array) => {
    array.forEach((el) => {
        if (el.children.lenght) {
            return render(el.view, el.children);
        } else {
            parent.append(el.view);
        }
    });
};

const views = addView(data);
const sorted = sortData(views);
render(root, sorted);
