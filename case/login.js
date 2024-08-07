const puppeteer = require("puppeteer");
const {
  dataNama,
  dataWhatsapp,
  dataPin,
  dataKelurahan,
  datart,
  datarw,
  datafullAddress,
} = require("../case/data/data");

login = async () => {
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
};
module.exports = login;
