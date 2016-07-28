    function scanDom(parent, i) {



        if (parent.childNodes[i].tagName) {

            var current = parent.childNodes[i].tagName;
            current = current.toLowerCase();
            if (current in tags) {
                tags[current]++;
            } else {
                tags[current] = 1;
            }
        }


        if (parent.childNodes[i].className) {

            var current = parent.childNodes[i].className;
            current = current.toLowerCase();


            if (current in classes) {
                classes[current]++;


            } else {
                classes[current] = 1;
            }
        }


        i++;

        if (i < parent.childNodes.length) {
            scanDom(container, i);
        } else {
            for (var tag in tags) {
                console.log(tag);
                console.log(tags[tag]);

            }
            for (var clas in classes) {
                console.log(clas);
                console.log(classes[clas]);

            }
        }
    }

module.exports = scanDom;

