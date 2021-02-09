// lazim olan html elementlerinin daxil edilmesi

var yes_ans = document.getElementById("yes_ans");
var no_ans = document.getElementById("no_ans");
var quest = document.getElementById("quest");
var bar = document.getElementById("innerbar");
var score = document.getElementById("score");
var coverr = document.getElementById("coverr");
var buttons = document.getElementById("buttons");
var outerbar = document.getElementById("outerbar");
var form = document.getElementById("form");
var joke = document.getElementById("joke");
var mes = document.getElementById("mes");
var iq_mes = document.getElementById("iq_mes");
var iq = document.getElementById("iq");
// _________________________________________________

// verilenlerin daxil edilmesi

var width = 100;
score.value = 1;
let rand_quest;
let rand_ans;
let randoms = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
    27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
    42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
    57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80];



// __________________________________________________


// suallarin daxil edilmesi

var question = [
    "61 - 52",
    "100 - 36",
    "10 x 5",
    "21 + 12",
    "11 / 1",
    "39 + 21",
    "81 / 9",
    "44 + 18",
    "92 - 24",
    "90 - 40",
    "54 / 6",
    "100 / 10",
    "54 + 45",
    "221 + 88",
    "5 / 5",
    "78 - 21",
    "52 / 2",
    "25 + 96",
    "44 - 23",
    "67 - 19",
    "15 / 5",
    "3 x 8",
    "199 + 288",
    "21 x 7",
    "38 + 183",
    "97 + 271",
    "24 + 58",
    "267 + 15",
    "91 + 68",
    "25 + 12",
    "373 - 206",
    "170 - 56",
    "8 x 23",
    "8 x 22",
    "48 + 61",
    "75 + 12",
    "89 + 34",
    "5 x 5",
    "30 / 6",
    "309 - 30",
    "200 + 40",
    "36 x 7",
    "560 - 454",
    "122 - 39",
    "69 - 43",
    "445 - 70",
    "107 - 67",
    "518 - 196",
    "168 - 140",
    "107 - 55",
    "93 + 13",
    "147 - 65",
    "5 x 8",
    "138 - 79",
    "78 + 6",
    "541 + 38",
    "49 + 35",
    "541 - 38",
    "89 - 12",
    "24 - 3",
    "18 + 9",
    "36 + 6",
    "56 - 33",
    "34 - 27",
    "4 x 7",
    "42 / 2",
    "108 / 3",
    "6 x 44",
    "8 x 1",
    "10 x 2",
    "21 + 87",
    "40 / 5",
    "72 / 8",
    "3 + 88",
    "7 x 22",
    "1 x 10",
    "3 x 3",
    "22 x 2",
    "1 x 2",
    "5 x 12"

];


// ___________________________________________________



// cavablarin daxil edilmesi

var answer = [
    a1 = ["9", "8"],
    a2 = ["64", "54"],
    a3 = ["50", "5"],
    a4 = ["33", "43"],
    a5 = ["11", "1"],
    a6 = ["60", "50"],
    a7 = ["9", "11"],
    a8 = ["92", "70"],
    a9 = ["68", "58"],
    a10 = ["50", "47"],
    a11 = ["9", "12"],
    a12 = ["10", "90"],
    a13 = ["99", "89"],
    a14 = ["309", "319"],
    a15 = ["1", "0"],
    a16 = ["57", "56"],
    a17 = ["26", "16"],
    a18 = ["121", "111"],
    a19 = ["21", "11"],
    a20 = ["48", "58"],
    a21 = ["3", "5"],
    a22 = ["24", "27"],
    a23 = ["487", "497"],
    a24 = ["147", "157"],
    a25 = ["221", "231"],
    a26 = ["368", "378"],
    a27 = ["82", "86"],
    a28 = ["282", "292"],
    a29 = ["159", "259"],
    a30 = ["37", "39"],
    a31 = ["167", "169"],
    a32 = ["114", "104"],
    a33 = ["184", "164"],
    a34 = ["176", "166"],
    a35 = ["109", "99"],
    a36 = ["87", "93"],
    a37 = ["123", "113"],
    a38 = ["25", "20"],
    a39 = ["5", "6"],
    a40 = ["279", "289"],
    a41 = ["240", "160"],
    a42 = ["252", "242"],
    a43 = ["106", "116"],
    a44 = ["83", "88"],
    a45 = ["26", "23"],
    a46 = ["375", "365"],
    a47 = ["40", "60"],
    a48 = ["322", "328"],
    a49 = ["68", "66"],
    a50 = ["52", "62"],
    a51 = ["106", "97"],
    a52 = ["82", "124"],
    a53 = ["40", "39"],
    a54 = ["59", "56"],
    a55 = ["84", "88"],
    a56 = ["579", "589"],
    a57 = ["84", "88"],
    a58 = ["503", "493"],
    a59 = ["77", "74"],
    a60 = ["21", "18"],
    a61 = ["27", "24"],
    a62 = ["42", "52"],
    a63 = ["23", "21"],
    a64 = ["7", "4"],
    a65 = ["28", "26"],
    a66 = ["21", "18"],
    a67 = ["36", "23"],
    a68 = ["264", "254"],
    a69 = ["8", "6"],
    a70 = ["20", "17"],
    a71 = ["108", "106"],
    a72 = ["8", "3"],
    a73 = ["9", "8"],
    a74 = ["91", "93"],
    a75 = ["154", "144"],
    a76 = ["10", "11"],
    a77 = ["9", "11"],
    a78 = ["42", "52"],
    a79 = ["2", "1"],
    a80 = ["60", "56"],


];


// ___________________________________________________________


// suallar uzerinde emeliyyatlarin aparilmasi

function firstQuest() {


    if (!(randoms.length < 1)) {

        rand_quest = randoms[Math.floor(Math.random() * randoms.length)];
        var index = randoms.indexOf(rand_quest);
        randoms.splice(index, 1);
    } else {
        form.setAttribute('class', 'nonactive');
        outerbar.setAttribute('class', 'nonactive');
        buttons.setAttribute('class', 'nonactive');
        score.setAttribute('class', 'nonactive');
        mes.setAttribute('class', 'nonactive');
        iq.setAttribute('class', 'active');

    }

    rand_ans = Math.floor(Math.random() * 2);
    quest.value = question[rand_quest] + " = " + answer[rand_quest][rand_ans];

}

firstQuest();

// ______________________________________________________________________



// mesaj verilmesi funksiyasinin qurulmasi

function message() {
    joke.classList.remove("nonactive");
    joke.classList.toggle("activej");
}

function messageout() {
    joke.classList.remove("activej");
    joke.classList.add("nonactive");
}


// __________________________________________


// buttonlarin daxil edilmesi


yes_ans.addEventListener('click', function (e) {
    e.preventDefault;



    if (answer[rand_quest][rand_ans] == answer[rand_quest][0]) {
        width += 10;
        score.innerHTML = "Score : " + score.value++;
        setTimeout(messageout, 200);
    } else {
        width -= 32;
        setTimeout(message, 200);
    }

    if (width > 100) {
        width = 100;

    }

    firstQuest();

})

no_ans.addEventListener('click', function (e) {
    e.preventDefault;


    if (answer[rand_quest][rand_ans] == answer[rand_quest][1]) {
        width += 10;
        score.innerHTML = "Score : " + score.value++;
        setTimeout(messageout, 200);
    } else {
        width -= 32;
        setTimeout(message, 200);
    }


    firstQuest();
})

// __________________________________________________________________


// progress bar prosesinin qurulmasi


function ref() {
    if (!(width > 100) || !(width < 0)) {
        width--;
        bar.style.width = width + "%";
    } if (width <= 0) {
        bar.style.width = 0 + "%";
        form.setAttribute('class', 'nonactive');
        outerbar.setAttribute('class', 'nonactive');
        buttons.setAttribute('class', 'nonactive');
        score.setAttribute('class', 'active');
        mes.setAttribute('class', 'nonactive');
    }
}

setInterval(ref, 100);


// _______________________________________________________________