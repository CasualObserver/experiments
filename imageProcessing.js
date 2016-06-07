var dec = [], hex = [], i = 0;
var process = (function () {
    document.addEventListener('drop', drop, false);
    document.addEventListener('dragover', dragOver, false);

    function dragOver(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    function drop(e) {
        e.preventDefault();
        e.stopPropagation();
        init(e.target.files || e.dataTransfer.files);
    }

    function init(files) {
        var i = files.length;

        while (i--) {
            var r = new FileReader(), f = files[i], top = 0, left = 0;
            name = f.name;
            r.onload = function () {
                txt = this.result;
                dec = new Uint8Array(this.result);
                console.log(txt);
                console.log(dec);
                i = dec.length;
                //while (i--) {
                //     var div = document.createElement('div');
                //     (left < 100 * 10) ? left += 10 : (function() {
                //         left = 0;
                //         (top < 100 * 10) ? top += 10: top = 0;
                //     }());                                       
                //     div.style.width = "10px";
                //     div.style.height = "10px";
                //     div.style.position = "absolute";
                //     div.style.left = left + "px";
                //     div.style.top = top + "px";
                //     div.style.background = "rgb(" + dec[i] + "," + dec[i - 1] + "," + dec[i - 2] + ")";
                //     document.body.appendChild(div);
                //     hex.push(dec[i].toString(16));
                //}

            }
            //r.readAsArrayBuffer(f);
            r.readAsBinaryString(f);
        }
    }
} ());
