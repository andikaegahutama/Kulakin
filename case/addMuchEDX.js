const puppeteer = require("puppeteer");
// EDX Vitummy 1+
addTransactionMuchEDX = async () => {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      args: [`--window-size=1920,1080`],
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1475, height: 825 });
    await page.goto("https://dev.kulakin.id");
    console.log("Berhasil mengakses kulakin");

    await page.click("xpath//html/body/div/div[2]/div[1]/div[1]/a/div");

    const whatsappfield = await page.waitForSelector("#whatsapp");
    await page.click("#whatsapp");
    await whatsappfield.type("6285179512101");
    console.log(whatsappfield);
    const pin = await page.waitForSelector("#pin");
    await page.click("#pin");
    await pin.type("888888");

    await page.click("xpath//html/body/div/div[2]/div[2]/button");

    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight), 2000;
    });

    const cartFastEDX = await page.waitForSelector(
      "xpath//html/body/div/div[2]/div[3]/div[2]/div/div[2]/div/div[1]/div/div[2]/button[2]"
    );
    await cartFastEDX.click();

    const plus = await page.waitForSelector(
      "xpath//html/body/div/div[2]/div[1]/div[2]/label/div[2]/div/button[2]"
    );
    await plus.click();
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
      "xpath//html/body/div/div[5]/div[2]/div[2]/div[1]/div[3]/div/div[1]/div"
    );
    await addressName.click();

    const addAddress = await page.waitForSelector(
      "xpath//html/body/div/div[5]/div[2]/div[2]/div[2]/button"
    );
    await addAddress.click();
    setTimeout(async () => {
      const paymentButton = await page.waitForSelector(
        "xpath//html/body/div/div[2]/div[1]/div[4]/div"
      );
      await paymentButton.click();
    }, 1000);

    // const codPayment = await page.waitForSelector(
    //   "xpath//html/body/div/div[5]/div[2]/div[2]/div/div[2]/div/div[1]/div[2]/div"
    // );
    // await codPayment.click();

    const vaPayment = await page.waitForSelector(
      "xpath//html/body/div/div[5]/div[2]/div[2]/div/div[2]/div/div[2]/div[2]/div"
    );
    await vaPayment.click();

    const payButton = await page.waitForSelector(
      "xpath//html/body/div/div[5]/div[2]/div[2]/div/div[3]/div[2]/button"
    );
    await payButton.click();
    setTimeout(async () => {
      await page.close();
      await page.close();
    }, 3000);
  } catch {}
};
module.exports = addTransactionMuchEDX;
