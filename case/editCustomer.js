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
let randomNumber = Math.floor(Math.random * number.length);

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

  const menuCustomer = await page.waitForSelector(
    "xpath//html/body/div/div[4]/a[4]/div"
  );
  await menuCustomer.click();
  setTimeout(async () => {
    const detailKontak = await page.waitForSelector(
      "xpath//html/body/div/div[2]/div[1]/div[2]/div/div[1]/div"
    );
    await detailKontak.click();
  }, 2000);

  const editKontak = await page.waitForSelector(
    "xpath//html/body/div/div[2]/div[2]/div[1]/div[1]/div/div"
  );
  await editKontak.click(
    "xpath//html/body/div/div[2]/div[2]/div[1]/div[1]/div/div"
  );

  // console.log("Bisa gak??");
  const nameCS = await page.waitForSelector("#name");
  await nameCS.click(nameCS);
  await nameCS.click({ clickCount: 3 });
  await nameCS.press("Backspace");
  await nameCS.type(chance.name());

  const birthdayInput = await page.waitForSelector("#birthdate");
  await birthdayInput.click();
  await birthdayInput.type(`201902020`);
  await birthdayInput.click();
  await page.keyboard.down("ShiftLeft");
  await page.keyboard.press("Tab");
  await birthdayInput.type(`02`);
  await page.keyboard.down("ShiftLeft");
  await page.keyboard.press("Tab");
  await page.keyboard.down("ShiftLeft");
  await page.keyboard.press("Tab");
  await birthdayInput.type(`02`);

  const genderlist = await page.waitForSelector("#react-select-2-input");
  await genderlist.click(genderlist);
  const gender = await page.waitForSelector("#react-select-2-option-0");
  await gender.click(gender);

  const territory = await page.waitForSelector(
    "#TerritoryInputForm-home-view-id"
  );
  await territory.click();
  await territory.type(dataKelurahan());

  if (
    (territory === "Gunungtelu",
    "Ciporos",
    "Bengbulang",
    "Ciruyung",
    "Surusunda",
    "Pangawaren")
  ) {
    const city = await page.waitForSelector(
      `xpath//html/body/div/div[8]/div/div/div/div[2]/div[1]/div/div/div[2]/div/div/div`
    );
    await city.click();
  } else {
    const city = await page.waitForSelector(
      `xpath//html/body/div/div[8]/div/div/div/div[2]/div[1]/div/div/div[2]/div/div/div[${randomNumber}]`
    );
    await city.click();
  }

  const next = await page.waitForSelector(
    "xpath//html/body/div/div[8]/div/div/div/div[2]/div[2]/div/div/button"
  );
  await next.click();

  await page.click(
    "xpath//html/body/div/div[8]/div/div/div/div[2]/div[2]/div/div/button/div"
  );

  const whatsapp = await page.waitForSelector("#whatsapp");
  await whatsapp.click({ clickCount: 3 });
  await whatsapp.press("Backspace");
  await page.click("#whatsapp");
  await whatsapp.type("628" + chance.phone());

  const rw = await page.waitForSelector("#rw");
  await rw.click();
  await rw.type(`12`);

  const fullAddress = await page.waitForSelector("#fullAddress");
  await fullAddress.click({ clickCount: 3 });
  await fullAddress.press("Backspace");
  await page.click("#fullAddress");
  await fullAddress.type(chance.address());

  const rt = await page.waitForSelector("#rt");
  await rt.click();
  await rt.type(`3`);

  const submit = await page.waitForSelector(
    "xpath//html/body/div/div[8]/div/div/div/div[2]/div[2]/div/div/button"
  );
  await submit.click(submit);
};
module.exports = editCustomer;
