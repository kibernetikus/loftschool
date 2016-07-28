var deleteTextNodes = function(parent) {
        console.log(parent.childNodes);
        for (var i = 0; i < parent.childNodes.length; i++) {

            if (parent.childNodes[i].nodeType === 3) {

                parent.removeChild(parent.childNodes[i]);
            }

        }
        console.log(parent.childNodes);
    };

module.exports = deleteTextNodes;

