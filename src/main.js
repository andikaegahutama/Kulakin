const doLogin = require("../src/cases/login.js");
const doRegist = require("../src/cases/register");
const doCreateCustomer = require("../src/cases/createCustomer");
const doEditCustomer = require("../src/cases/editCustomer");
const doDeleteCustomer = require("../src/cases/deleteCustomer");
const doAddCart = require("../src/cases/addCart");
const doAddOneEDX = require("../src/cases/addOneEDX");
const doAddMuchEDX = require("../src/cases/addMuchEDX");
const doAddOneEDM = require("../src/cases/addOneEDM");
const doAddMuchEDM = require("../src/cases/addMuchEDM");
const doAddReviewProduct = require("../src/cases/reviewProduct");
const doLogout = require("../src/cases/logout");

async function execute() {
  // for (let i = 0; i < 10; i++) {
  try {
    await doLogin();
    // await doRegist();
    // await doCreateCustomer();
    // await doEditCustomer();
    // await doDeleteCustomer();
    // await doAddCart();
    // await doAddOneEDX();
    // await doAddMuchEDX();
    // await doAddOneEDM();
    // await doAddMuchEDM();
    // await doAddReviewProduct();
    // await doLogout();
  } catch (error) {
    await console.log(error);
  } finally {
    await console.log("Selamat sudah berhasil eksekusi skrip");
  }
}

execute();
