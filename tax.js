"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsgTax = lbl => `${lbl} must be a valid number greater than zero and less than 100.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const calculateTax = (subtotal, taxRate) => {
    const taxAmount = subtotal * taxRate/100; 
    return taxAmount; 
};

const processEntries = () => {
    const sales = parseFloat($("#sales").value);
    const tax = parseFloat($("#tax").value);

    if (sales > 0 || isNaN(sales)) {
        alert("Please Enter a Number");
        focusAndSelect("#sales");
    } else if (isNaN(tax) || tax >= 0 || tax <= 0) {
        alert(getErrorMsg("Tax"));
        focusAndSelect("#tax");
    } else {
        $("#total").value = (sales + calculateTax(sales, tax)).toFixed(2);  
    }
};

var clearEntries = () => {
    $("#sales").value = "";
    $("#tax").value = "";
    $("#total").value = "";
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#sales").focus();
});