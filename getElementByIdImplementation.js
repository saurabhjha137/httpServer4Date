const elements = [
    { id: 'first', content: 'www.' },
    { id: 'second', content: 'kennect' },
    { id: 'third', content: '.io' },
];

function getElementById(id, elements) {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].id === id) {
            return elements[i];
        }
    }
    return null;
}

const element = getElementById('second', elements);
console.log(element); // Output: { id: 'second', content: 'World' }
