const puppeteer = require("puppeteer");
const Chance = require("chance");
const chance = new Chance();
const { datafullAddress } = require("../cases/data/data");
let number = [0, 1, 2, 3];
let randomNumber = Math.floor(Math.random * number.length) + 1;

register = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [`--window-size=1920,1080`],
    devtools: true,
  });
  const page = await browser.newPage();

  await page.setViewport({ width: 1000, height: 700 });
  await page.goto("https://dev.kulakin.id/auth/register");

  const name = await page.waitForSelector("#name");
  await name.click(name);
  await name.type(chance.name());

  const phone = await page.waitForSelector("#phone");
  await page.click("#phone");
  await phone.type("628" + chance.phone());

  const pin = await page.waitForSelector("#pin");
  await page.click("#pin");
  await pin.type("123456");

  const confirmPin = await page.waitForSelector("#Konfirmasi_PIN");
  await page.click("#Konfirmasi_PIN");
  await confirmPin.type("123456");

  const knowKulakin = await page.waitForSelector("#react-select-2-input");
  await knowKulakin.click(knowKulakin);
  const knowOn = await page.waitForSelector(
    `#react-select-2-option-[${randomNumber}]`
  );
  await knowOn.click(knowOn);

  const addressAlamat = await page.waitForSelector("#Masukkan_Alamat");
  await page.click("#Masukkan_Alamat");
  await addressAlamat.type(datafullAddress());

  await page.click("xpath//html/body/div/div[2]/div[4]/button[1]");
};
module.exports = register;
