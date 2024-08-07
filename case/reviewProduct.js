const puppeteer = require("puppeteer");

review = async () => {
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
    const cartEDX = await page.waitForSelector(
      "xpath//html/body/div/div[2]/div[3]/div[2]/div/div[2]/div/div[1]/div/div[2]/button[1]"
    );
    await cartEDX.click();

    const cartEDM = await page.waitForSelector(
      "xpath//html/body/div/div[2]/div[3]/div[2]/div/div[2]/div/div[4]/div/div[2]/button[1]"
    );
    await cartEDM.click();

    const cartFastEDX = await page.waitForSelector(
      "xpath//html/body/div/div[2]/div[3]/div[2]/div/div[2]/div/div[2]/div/div[2]/button[2]"
    );
    await cartFastEDX.click();

    setTimeout(async () => {
      const plus = await page.waitForSelector(
        "xpath//html/body/div/div[2]/div[1]/div[3]/label/div[2]/div/button[2]"
      );
      await plus.click();
      await plus.click();
    }, 7000);

    setTimeout(async () => {
      const minus = await page.waitForSelector(
        "xpath//html/body/div/div[2]/div[1]/div[3]/label/div[2]/div/button[1]"
      );
      await minus.click();
    }, 8000);

    setTimeout(async () => {
      const trash = await page.waitForSelector(
        "xpath//html/body/div/div[2]/div[1]/div[2]/label/div[2]/button"
      );
      await trash.click();
      await trash.click();
    }, 9000);
  } catch {}
};
module.exports = review;
