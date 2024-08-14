const puppeteer = require("puppeteer");
const { dataWhatsapp, dataPin } = require("../cases/data/data");

addCart = async () => {
  try {
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
    await console.log("Berhasil login createCustomer");

    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight), 2000;
    });

    const cartEDX = await page.waitForSelector(
      "xpath//html/body/div/div[2]/div[3]/div[2]/div/div[2]/div/div[1]/div/div[2]/button[1]"
    );
    await cartEDX.click();

    // const cartEDM = await page.waitForSelector(
    //   "xpath//html/body/div/div[2]/div[3]/div[2]/div/div[2]/div/div[4]/div/div[2]/button[1]"
    // );
    // await cartEDM.click();

    const cartFastEDX = await page.waitForSelector(
      "xpath//html/body/div/div[2]/div[3]/div[2]/div/div[2]/div/div[2]/div/div[2]/button[2]"
    );
    await cartFastEDX.click();

    const plus = await page.waitForSelector(
      "xpath//html/body/div/div[2]/div[1]/div[3]/label/div[2]/div/button[2]"
    );
    await plus.click();
    await plus.click();
    await console.log("Berhasil menambahkan barang");

    const minus = await page.waitForSelector(
      "xpath//html/body/div/div[2]/div[1]/div[3]/label/div[2]/div/button[1]"
    );
    await minus.click();
    await console.log("Berhasil mengurangi barang");

    const trash = await page.waitForSelector(
      "xpath//html/body/div/div[2]/div[1]/div[2]/label/div[2]/button"
    );
    await trash.click();
    console.log("Berhasil menghapus barang");
  } catch {}
};
module.exports = addCart;
