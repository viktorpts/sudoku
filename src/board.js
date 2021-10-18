export function generateBoard(values, main) {
    main.appendChild(cluster(values[0]));
    main.appendChild(cluster(values[1]));
    main.appendChild(cluster(values[2]));
}


function cluster(values) {
    return e('div', { className: 'cluster' }, ...values.map(block));
}

function block(values) {
    const element = e('div', { className: 'block' });

    element.appendChild(row(values.slice(0, 3)));
    element.appendChild(row(values.slice(3, 6)));
    element.appendChild(row(values.slice(6)));

    return element;
}

function row(values) {
    return e('div', { className: 'row' }, ...values.map(cell));
}

function cell(value) {
    const element = e('input', { type: 'text', className: 'cell' });

    if (value > 0) {
        element.disabled = true;
        element.classList.add('fixed');
        element.value = value;
    }

    return element;
}

function e(type, attr, ...content) {
    const element = document.createElement(type);

    for (let prop in attr) {
        element[prop] = attr[prop];
    }
    for (let item of content) {
        if (typeof item == 'string' || typeof item == 'number') {
            item = document.createTextNode(item);
        }
        element.appendChild(item);
    }

    return element;
}