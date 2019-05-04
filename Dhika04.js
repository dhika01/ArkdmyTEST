function randomString(angka) {
    var data = [];
    var validData = [];
    var urut = 0;
    for (a = 0; a < angka; a++) {
        var cha = '';
        for (cha; cha.length < 32;) {
            cha += Math.random().toString(36).substr(2, 1);
        }

        data.push(cha);
        if (a >= 1) {
            var check = true;

            for (e = 0; e <= urut; e++) {
                for (d = e + 1; d <= urut; d++) {
                    if (data[e] == data[d]) {
                        check = false;
                    }
                }
            }
            if (check == false) {
                angka++;
            } else {
                validData.push(cha);
                urut++;
            }

        } else {
            validData.push(cha);
            urut++;
        }


    }
    var st = "";
    for (b = 0; b < urut; b++) {
        st += validData[b] + "\n";

    }
    console.log(st);
}

randomString(3);