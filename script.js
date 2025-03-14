// JavaScript Document

//商品詳細のテキストを表示
"use strict";

const parentMenu = document.querySelectorAll(".btn_dropdown");

for (let i = 0; i < parentMenu.length; i++) {
  parentMenu[i].addEventListener("click", function (e) {
    e.preventDefault();
    parentMenu[i].nextElementSibling.classList.toggle("active");
  });
}

//３点リーダーのドロップダウンリスト
const parentList = document.querySelectorAll(".icon_reader");

for (let i = 0; i < parentList.length; i++) {
  parentList[i].addEventListener("click", function (e) {
    e.preventDefault();
    parentList[i].nextElementSibling.classList.toggle("droplist");
  });
}
