const puppeteer = require("../../node_modules/puppeteer");
const Chance = require("chance");
const chance = new Chance();
const {
  dataWhatsapp,
  dataPin,
  dataKelurahan,
  datart,
  datarw,
  datafullAddress,
} = require("../cases/data/data");
const data = require("../cases/data/data");
let number = [1, 2, 3, 4, 5, 6, 7, 8];
let randomNumber = Math.floor(Math.random * number.length) + 1;

createCustomer = async () => {
  const browser = await puppeteer.launch({
    // headless: false,
    args: [`--window-size=1920,1080`],
    // devtools: true,
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
  await console.log("Berhasil login createCustomer");

  const menuCustomer = await page.waitForSelector(
    "xpath//html/body/div/div[4]/a[4]/div"
  );
  await menuCustomer.click();

  const tambahKontak = await page.waitForSelector(
    "xpath//html/body/div/div[2]/div[2]/button"
  );
  await tambahKontak.click();

  const nameCS = await page.waitForSelector("#name");
  await nameCS.click();
  await nameCS.type(chance.name());

  const desa = await page.waitForSelector(
    "xpath//html/body/div/div[8]/div/div/div/div[2]/div[1]/div/div[2]/div/div/input"
  );
  await desa.click();

  const territory = await page.waitForSelector(
    "#TerritoryInputForm-territory-view-id"
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

  const rt = await page.waitForSelector("#rt");
  await rt.click();
  await rt.type(datart());

  const rw = await page.waitForSelector("#rw");
  await rw.click();
  await rw.type(datarw());

  const whatsapp = await page.waitForSelector("#whatsapp");
  await page.click("#whatsapp");
  await whatsapp.type("628" + chance.phone());

  const fullAddress = await page.waitForSelector("#fullAddress");
  await page.click("#fullAddress");
  await fullAddress.type(`${datafullAddress()}, ${data.dataKelurahan()}`);

  await page.click(
    "xpath//html/body/div/div[8]/div/div/div/div[2]/div[2]/div/div/button/div"
  );
  await console.log("Berhasil Create Customer");
};

module.exports = createCustomer;
