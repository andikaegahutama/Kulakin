const doLogin = require("../Kulakin/case/login");
const doRegist = require("../Kulakin/case/register");
const doCreateCustomer = require("../Kulakin/case/createCustomer");
const doEditCustomer = require("../Kulakin/case/editCustomer");
const doDeleteCustomer = require("../Kulakin/case/deleteCustomer");
const doAddCart = require("../Kulakin/case/addCart");
const doAddOneEDX = require("../Kulakin/case/addOneEDX");
const doAddMuchEDX = require("../Kulakin/case/addMuchEDX");
const doAddOneEDM = require("../Kulakin/case/addOneEDM");
const doAddMuchEDM = require("../Kulakin/case/addOneEDM");
const doAddDifferentEDM = require("../Kulakin/case/addDifferentEDM");
const doAddDifferentEDX = require("../Kulakin/case/addDifferentEDX");
const doAddReviewProduct = require("../Kulakin/case/reviewProduct");
const doLogout = require("../Kulakin/case/logout");

async function execute() {
  // for (let i = 0; i < 10; i++) {
  try {
    // await doLogin();
    // await doRegist();
    // await doCreateCustomer();
    // await doEditCustomer();
    // await doDeleteCustomer();
    // await doAddCart();
    // await doAddOneEDX();
    // await doAddMuchEDX();
    // await doAddOneEDM();
    // await doAddMuchEDM();
    // await doAddDifferentEDM();
    // await doAddDifferentEDX();
    doAddReviewProduct();
    // await doLogout();
  } catch (error) {
    await console.log(error);
  } finally {
    await console.log("Selamat sudah berhasil eksekusi skrip");
  }
}
// }

execute();
