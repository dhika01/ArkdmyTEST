function selectionShort(arrSa) {

    var i, j, min, temp;
    for (i = 0; i < arrSa.length - 1; i++) {
        min = i;
        for (j = i + 1; j < arrSa.length; j++) {
            if (arrSa[j] < arrSa[min]) {
                min = j;

            }
        }
        temp = arrSa[i];
        arrSa[i] = arrSa[min];
        arrSa[min] = temp;
    }

    return arrSa;
}

function charku(data) {
    var cData = [];
    for (a = 0; a < data.length; a++) {
        var nil = data[a].charCodeAt();
        cData.push(nil);
    }

    var urut = selectionShort(cData);
    var eData = [];
    for (b = 0; b < urut.length; b++) {
        eData.push(String.fromCharCode(urut[b]));
    }
    return eData;
}

function shorNadir(data) {
    document.getElementById("dihka").innerHTML += "<br>";
    var nil = [];
    var nili = [];
    for (c = 0; c < data.length; c++) {

        nil.push(data[c].length);
        nili.push(data[c].length);
    }
    var urut = selectionShort(nil);
    var st = "";
    for (h = 0; h < urut.length; h++) {
        for (s = 0; s < urut.length; s++) {
            if (urut[h] == nili[s]) {
                var da = charku(data[s]);
                st += da + "\n";
            }
        }
    }
    console.log(st);
}

var arrData = [
    ['a', 'b', 'c', 'd', 'e', 'a'],
    ['a', 'b', 'c'],
    ['a', 's', 'c', 'a', 't', 'g', 'a']
];
shorNadir(arrData);
// a,b,c
// a,a,b,c,d,e
// a,a,a,c,g,s,t