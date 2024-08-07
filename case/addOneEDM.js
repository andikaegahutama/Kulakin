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

addTransactionOneEDM = async () => {
  try {
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

    await console.log("Berhasil login addOneEDM");

    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight), 2000;
    });

    const cartFastEDM = await page.waitForSelector(
      "xpath//html/body/div/div[2]/div[3]/div[2]/div/div[2]/div/div[4]/div/div[2]/button[2]"
    );
    await cartFastEDM.click();

    const plus = await page.waitForSelector(
      "xpath//html/body/div/div[2]/div[1]/div[2]/label/div[2]/div/button[2]"
    );
    await plus.click();

    const buyButton = await page.waitForSelector(
      "xpath//html/body/div/div[2]/div[2]/div[2]/button[1]"
    );
    await buyButton.click();

    const addressButton = await page.waitForSelector(
      "xpath//html/body/div/div[2]/div[1]/div[2]/button"
    );
    await addressButton.click();

    const addressName = await page.waitForSelector(
      "xpath//html/body/div/div[7]/div/div/div/div[2]/div[1]/div[2]/div/div/div[1]/div"
    );
    await addressName.click();

    const addAddress = await page.waitForSelector(
      "xpath//html/body/div/div[7]/div/div/div/div[2]/div[2]/div/div/button/div"
    );
    await addAddress.click();

    setTimeout(async () => {
      const paymentButton = await page.waitForSelector(
        "xpath//html/body/div/div[2]/div[1]/div[4]/div"
      );
      await paymentButton.click();
    }, 1000);

    const codPayment = await page.waitForSelector(
      "xpath//html/body/div/div[7]/div/div/div/div[2]/div[1]/div[1]/div/div[2]/div/div"
    );
    await codPayment.click();

    //   // const vaPayment = await page.waitForSelector(
    //   //   "xpath//html/body/div/div[5]/div[2]/div[2]/div/div[2]/div/div[2]/div[2]/div"
    //   // );
    //   // await vaPayment.click();

    const payButton = await page.waitForSelector(
      "xpath//html/body/div/div[7]/div/div/div/div[2]/div[1]/div[2]/div[2]/button"
    );
    await payButton.click();
    await console.log("Berhasil membuat transaksi addOneEDM");
  } catch {}
};
module.exports = addTransactionOneEDM;
