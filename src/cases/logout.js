const puppeteer = require("puppeteer");
const { dataWhatsapp, dataPin } = require("../cases/data/data");

logout = async () => {
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

  const profile = await page.waitForSelector(
    "xpath//html/body/div/div[4]/a[5]"
  );
  await profile.click();

  const logoutButton = await page.waitForSelector(
    "xpath//html/body/div/div[3]/button"
  );
  await logoutButton.click();

  const sureLogout = await page.waitForSelector(
    "xpath//html/body/div[2]/div/div/div/div[2]/div/div/div[3]/button[2]"
  );
  await sureLogout.click();
};
module.exports = logout;
