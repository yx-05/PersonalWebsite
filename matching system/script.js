var percentage = document.getElementById("percentage");
var button = document.getElementsByClassName("button");

const red = "red";
const yellow = "yellow";
const green = "green";
const blue = "blue";

const mbtis = {
    estj: red,
    esfj: red,  
    istj: yellow,
    isfj: red,
    estp: yellow,
    esfp: red,
    istp: green,
    isfp: yellow,
    entj: green,
    entp: blue,
    intj: blue,
    intp: blue, 
    enfj: yellow,
    enfp: green,
    infj: green,
    infp: blue,
};

function output(){
    var mbti = String(document.getElementById("mbti").value);
    console.log(mbti);
    console.log(mbtis[mbti]);
    
    percentage.innerHTML = mbtis[mbti];
}
