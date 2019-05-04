function biodata() {
    var biodhika = {
        name: "Muh dhika",
        Address: "Jln. sahabat 4, Makassar",
        Hobbies: ["Coding", "Gaming", "Watching"],
        Is_Married: false,
        School: {
            "01": "STMIK DP"
        },
        Skills: [{
            "nama": "sembarang"
        }, {
            "nama": "kedua"
        }]
    };
    var dhikaJSON = JSON.stringify(biodhika);
    console.log(biodhika);

    return biodhika;
}

biodata();