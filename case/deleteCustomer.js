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

deleteCustomer = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [`--window-size=1920,1080`],
    devtools: true,
  });
  const page = await browser.newPage();

  await page.setViewport({ width: 1000, height: 700 });
  await page.goto("https://dev.kulakin.id/auth/login");
  console.log("Berhasil mengakses kulakin");

  const whatsappfield = await page.waitForSelector("#whatsapp");
  await page.click("#whatsapp");
  await whatsappfield.type(dataWhatsapp());

  const pin = await page.waitForSelector("#pin");
  await page.click("#pin");
  await pin.type(dataPin());

  await page.click("xpath//html/body/div/div[2]/div[2]/button");

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

  const deleteButton = await page.waitForSelector(
    "xpath//html/body/div/div[3]/div/button"
  );
  await deleteButton.click();

  const confirmButton = await page.waitForSelector(
    "xpath//html/body/div[2]/div/div/div/div[2]/div/div/div[3]/button[2]"
  );
  await confirmButton.click();
};

module.exports = deleteCustomer;
