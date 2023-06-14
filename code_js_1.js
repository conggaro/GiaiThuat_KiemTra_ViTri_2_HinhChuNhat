var hcn1;
var hcn2;

// lấy phần tử hcn1
hcn1 = document.querySelector(".hcn-01");

// lấy phần tử hcn2
hcn2 = document.querySelector(".hcn-02");

Object.assign(hcn1.style, {
    left: "10px",               // nhập x1
    top: "0px",                 // nhập y1
    width: "300px",             // nhập chiều dài 1
    height: "150px"             // nhập chiều rộng 1
});

Object.assign(hcn2.style, {
    left: "310px",              // nhập x2
    top: "160px",               // nhập y2
    width: "300px",             // nhập chiều dài 2
    height: "150px"             // nhập chiều rộng 2
});

var x1 = hcn1.offsetLeft;                       // lấy x1
var y1 = hcn1.offsetTop;                        // lấy y1
var chieu_dai_1 = hcn1.offsetWidth;             // lấy chiều dài 1
var chieu_rong_1 = hcn1.offsetHeight;           // lấy chiều rộng 1

var x2 = hcn2.offsetLeft;                       // lấy x2
var y2 = hcn2.offsetTop;                        // lấy y2
var chieu_dai_2 = hcn2.offsetWidth;             // lấy chiều dài 2
var chieu_rong_2 = hcn2.offsetHeight;           // lấy chiều rộng 2

console.log({
    "x1": x1,
    "y1": y1,
    "chieu_dai_1": chieu_dai_1,
    "chieu_rong_1": chieu_rong_1
});

console.log({
    "x2": x2,
    "y2": y2,
    "chieu_dai_2": chieu_dai_2,
    "chieu_rong_2": chieu_rong_2
});

if((x1 + chieu_dai_1) < x2 || (x2 + chieu_dai_2) < x1){
    console.log("Không giao nhau");
}
else if((x1 + chieu_dai_1) >= x2 || (x2 + chieu_dai_2) >= x1){
    if((y1 + chieu_rong_1) < y2 || (y2 + chieu_rong_2) < y1){
        console.log("Không giao nhau");
    }
    else if((y1 + chieu_rong_1) >= y2 || (y2 + chieu_rong_2) >= y1){
        console.log("Giao nhau");
    }
}