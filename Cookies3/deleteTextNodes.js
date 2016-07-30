var deleteTextNodes = function(parent, i) {
        console.log(parent.childNodes);
        if (parent.childNodes[i].nodeType === 3) {
            parent.removeChild(parent.childNodes[i]);
        }

        i += 1;

        if (i < parent.childNodes.length) {
            deleteTextNodes(container, i);
        }

        console.log(parent.childNodes);

    };

module.exports = deleteTextNodes;

