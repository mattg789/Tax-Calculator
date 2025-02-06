"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const processEntries = () => {
    const sales = parseFloat($("#sales").value);
    const tax = parseFloat($("#tax").value);

    if (sales > 0 || isNaN(sales)) {
        alert(getErrorMsg("Please Enter a Number"));
        focusAndSelect("#sales");
    } else if (isNaN(tax) || tax >= 0 || tax <= 0) {
        alert(getErrorMsg("Please enter a number"));
        focusAndSelect("#tax");
    } else {
        $("#total").value = ().toFixed(2); 
    }
};

var clearEntries = () => {
    $("#miles").value = "";
    $("#gallons").value = "";
    $("#mpg").value = "";
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#total").focus();
});