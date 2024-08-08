const puppeteer = require("puppeteer");
const Chance = require("chance");
const chance = new Chance();
const {
  dataNama,
  dataWhatsapp,
  dataPin,
  dataKelurahan,
  datart,
  datarw,
  datafullAddress,
} = require("../case/data/data");
const data = require("../case/data/data");
let number = [1, 2, 3, 4, 5, 6, 7, 8];
let randomNumber = Math.floor(Math.random * number.length) + 1;

editCustomer = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [`--window-size=1920,1080`],
    devtools: true,
  });
  const page = await browser.newPage();

  await page.setViewport({ width: 1000, height: 700 });
  await page.goto("https://dev.kulakin.id/auth/login");

  const whatsappfield = await page.waitForSelector("#whatsapp");
  await page.click("#whatsapp");
  await whatsappfield.type(dataWhatsapp());

  const pin = await page.waitForSelector("#pin");
  await page.click("#pin");
  await pin.type(dataPin());

  await page.click("xpath//html/body/div/div[2]/div[2]/button");
  await console.log("Berhasil login editCustomer");

  try {
    const menuCustomer = await page.waitForSelector(
      "xpath//html/body/div/div[4]/a[4]/div"
    );
    await menuCustomer.click();
    await page.waitForNavigation({ waitUntil: "networkidle0" });
    let detailKontak;
    for (let i = 0; i < 1; i++) {
      // Coba hingga 5 kali
      try {
        detailKontak = await page.waitForXPath(
          "//html/body/div/div[2]/div[1]/div[2]/div/div[1]/div",
          { timeout: 2000 }
        );
        await detailKontak.click();
        console.log("Clicked on detail kontak");
        break; // Keluar dari loop jika berhasil
      } catch (e) {
        console.log("Detail kontak not found, retrying...");
      }
    }
    // const editKontak = await page.waitForSelector(
    //   "xpath//html/body/div/div[2]/div[2]/div[1]/div[1]/div/div"
    // );
    // await editKontak.click(
    //   "xpath//html/body/div/div[2]/div[2]/div[1]/div[1]/div/div"
    // );
    // console.log("Bisa gak??");
  } catch (error) {
    console.error("Console", error);
  }
  // const nameCS = await page.waitForSelector("#name");
  // await nameCS.click(nameCS);
  // await nameCS.click({ clickCount: 3 });
  // await nameCS.press("Backspace");

  // const nameCS = await page.waitForSelector("#name");
  // await nameCS.click(nameCS);
  // await nameCS.type(chance.name());

  // const birthdayInput = await page.waitForSelector("#birthday");
  // await birthdayInput.click();
  // await birthdayInput.type("02-02-2022");
  // console.log(birthdayInput);

  // const genderlist = await page.waitForSelector("#react-select-2-input");
  // await genderlist.click(genderlist);
  // const gender = await page.waitForSelector("#react-select-2-option-0");
  // await gender.click(gender);

  // const desa = await page.waitForSelector(
  //   "xpath//html/body/div/div[6]/div[2]/div[2]/div/div[1]/div[2]/div[4]/div/div"
  // );
  // await desa.click();
  // await desa.click();

  // const territory = await page.waitForSelector(
  //   "xpath//html/body/div/div[6]/div[2]/div[2]/div/div[1]/div[2]/div/div/div/input"
  // );
  // await territory.click(territory);
  // await territory.type("karangpucung");

  // const city = await page.waitForSelector(
  //   "xpath//html/body/div/div[6]/div[2]/div[2]/div/div[1]/div[2]/div[2]/div[1]/div"
  // );
  // await city.click(city);

  // await page.click(
  //   "xpath//html/body/div/div[6]/div[2]/div[2]/div/div[2]/button/div"
  // );

  // await page.click(
  //   "xpath//html/body/div/div[6]/div[2]/div[2]/div/div[2]/button/div"
  // );

  // const rt = await page.waitForSelector("#rt");
  // await rt.click(rt);
  // await rt.type("2");

  // const rw = await page.waitForSelector("#rw");
  // await rw.click(rw);
  // await rw.type("1");

  // const whatsapp = await page.waitForSelector("#whatsapp");
  // await whatsapp.click({ clickCount: 3 });
  // await whatsapp.press("Backspace");

  // const whatsapp = await page.waitForSelector("#whatsapp");
  // await page.click("#whatsapp");
  // await whatsapp.type("628" + chance.phone());

  // const fullAddress = await page.waitForSelector("#fullAddress");
  // await fullAddress.click({ clickCount: 3 });
  // await fullAddress.press("Backspace");

  // const fullAddress = await page.waitForSelector("#fullAddress");
  // await page.click("#fullAddress");
  // await fullAddress.type(chance.address());

  // const submit = await page.waitForSelector(
  //   "xpath//html/body/div/div[6]/div[2]/div[2]/div/div[2]/button/div"
  // );
  // await submit.click(submit);
};
module.exports = editCustomer;
