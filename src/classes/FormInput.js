"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormInput = void 0;
var Datas_1 = require("./Datas");
var FormInput = /** @class */ (function () {
    function FormInput() {
        this.form = document.getElementById('form');
        this.type = document.getElementById('type');
        this.firstName = document.getElementById('firstName');
        this.lastName = document.getElementById('lastName');
        this.address = document.getElementById('address');
        this.country = document.getElementById('country');
        this.town = document.getElementById('town');
        this.zip = document.getElementById('zip');
        this.product = document.getElementById('firstName');
        this.price = document.getElementById('price');
        this.quantity = document.getElementById('quantity');
        this.tva = document.getElementById('tva');
        this.submitFormListener();
    }
    //Listeners
    FormInput.prototype.submitFormListener = function () {
        this.form.addEventListener('submit', this.handleFormSubmit.bind(this));
    };
    FormInput.prototype.handleFormSubmit = function (event) {
        event.preventDefault();
        var inputs = this.inputDatas();
        if (Array.isArray(inputs)) {
            var type = inputs[0], firstName = inputs[1], lastName = inputs[2], address = inputs[3], country = inputs[4], town = inputs[5], zip = inputs[6], product = inputs[7], price = inputs[8], quantity = inputs[9], tva = inputs[10];
            console.log(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva);
            var docDatas = void 0;
            var date = new Date();
            docDatas = new Datas_1.Datas(type, firstName, lastName, address, country, town, zip, product, price, quantity, tva, date);
            console.log(docDatas.htmlFormat());
        }
    };
    FormInput.prototype.inputDatas = function () {
        var type = this.type.value;
        var firstName = this.firstName.value;
        var lastName = this.lastName.value;
        var address = this.address.value;
        var country = this.country.value;
        var town = this.town.value;
        var zip = this.zip.valueAsNumber;
        var product = this.product.value;
        var price = this.price.valueAsNumber;
        var quantity = this.quantity.valueAsNumber;
        var tva = this.tva.valueAsNumber;
        if (zip > 0 && price > 0 && quantity > 0 && tva > 0) {
            return [type, firstName, lastName, address, country, town, zip, product, price, quantity, tva];
        }
        alert("Numeric value must be a number");
    };
    return FormInput;
}());
exports.FormInput = FormInput;
