var t, a;
function example(e){
    clearTimeout(t);
    var w = e.width;
    var h = e.height;
    if (a) {
        t = setInterval(function () {
            if (w <= 450) clearTimeout(t); // Стили на уменьшение
            e.style.cursor = 'zoom-in';
            e.style.borderRadius = '1px';
            e.style.boxShadow = '2px 2px 5px #fff'
            e.width = w--;
            e.heigh = h--;
        }, 5);
    }
    else {
        t = setInterval(function () {
            if (w >= 550) clearTimeout(t);
// Стили на увеличение
            e.style.cursor = 'zoom-out';
            e.style.borderRadius = '5px';
            e.style.boxShadow = '2px 2px 5px #888'
            e.width = w++;
            e.height = h++;
        }, 5);
    }
    a = !a;
}