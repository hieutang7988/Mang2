function myTranslateEnglishtoVietnam() {
    var eng_animal = ["dog", "cat", "tiger", "lion"];
    var viet_animal = ["chó", "mèo", "hổ", "sư tử"];
    var result = "";
    // var index_eng = 0;
    var input = document.getElementById("name").value;
    console.log(input);
    for (var i = 0; i < eng_animal.length; i++) {
        if (input == eng_animal[i]) {
           // index_eng = i;
            result = viet_animal[i];
        }
    }
    document.getElementById("demo").innerHTML = result;
}
// hàm dịch Việt sang anh
function myTranslateVietnamtoEnglish(){
    var eng_animal = ["dog", "cat", "tiger", "lion"];
    var viet_animal = ["chó", "mèo", "hổ", "sư tử"];
    var result = "";
    // var index_eng = 0;
    var input = document.getElementById("name").value;
    console.log(input);

    for (var j = 0; j < viet_animal.length;j++) {
        if (input == viet_animal[j]) {
            result = eng_animal[j];
        }
    }
    document.getElementById("demo").innerHTML = result;
}
