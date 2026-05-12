export const createElement = (tag, attrs = {}, children = []) => {
    const element = document.createElement(tag);

    Object.entries(attrs).forEach(([key, value]) => {
        if (key === 'className') {
            element.className = value;
        } else if (key === 'html') {
            element.innerHTML = value;
        } else {
            element.setAttribute(key, value);
        }
    });

    children.flat().forEach(child => {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            element.appendChild(child);
        }
    });

    return element;
};

export const renderList = (items) => {
    const list = createElement('ul', { className: 'list-clean' });
    items.forEach(item => {
        const listItem = typeof item === 'string'
            ? createElement('li', { html: item })
            : createElement('li', {}, [item]);
        list.appendChild(listItem);
    });
    return list;
};

export const renderSection = (title, contentNodes) => {
    const section = createElement('section', { className: 'section-card' });
    section.appendChild(createElement('h2', { className: 'section-title' }, [title]));
    contentNodes.flat().forEach(node => section.appendChild(node));
    return section;
};

export const renderAnchor = (href, label) => {
    return createElement('a', { href, target: '_blank', rel: 'noopener noreferrer' }, [label]);
};