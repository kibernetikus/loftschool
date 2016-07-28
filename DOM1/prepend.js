function prepend(container, newElement) {
        container.insertBefore(newElement, container.firstChild)
    };

module.exports = prepend;