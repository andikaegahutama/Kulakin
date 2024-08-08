const puppeteer = require("puppeteer");
const path = require("path");
const { dataWhatsapp, dataPin } = require("../case/data/data");

const imagePath = path.resolve(__dirname, "../image/img.png");

const review = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [`--window-size=1920,1080`],
    devtools: true,
  });
  const page = await browser.newPage();

  await page.setViewport({ width: 1000, height: 700 });
  await page.goto("https://dev.kulakin.id/auth/login");

  const whatsappfield = await page.waitForSelector("#whatsapp");
  await whatsappfield.type(dataWhatsapp());

  const pin = await page.waitForSelector("#pin");
  await pin.type(dataPin());

  await page.click("xpath//html/body/div/div[2]/div[2]/button");
  console.log("Berhasil login reviewProduct");

  const pesanan = await page.waitForSelector(
    "xpath//html/body/div/div[4]/a[3]"
  );
  await pesanan.click();

  const doneStatus = await page.waitForSelector(
    "xpath//html/body/div/div[2]/div[1]/div[3]/div/a[5]"
  );
  await doneStatus.click();

  const reviewButton = await page.waitForSelector(
    "xpath//html/body/div/div[2]/div[2]/div[1]/div[2]/div[2]/div/div[2]/button"
  );
  await reviewButton.click();

  const textArea = await page.waitForSelector(
    "xpath//html/body/div[1]/div[8]/div/div/div/div[2]/div[1]/div[4]/textarea"
  );
  await textArea.type("Sangat bagus aku suka sekali produknya");

  const uploadImage = await page.waitForSelector('input[type="file"]');
  await uploadImage.uploadFile(imagePath);

  const uploadSuccess = await page.evaluate(() => {
    const inputElement = document.querySelector('input[type="file"]');
    return inputElement.files.length > 0;
  });
  console.log("Upload successful:", uploadSuccess);

  const reviewNow = await page.waitForSelector(
    "xpath//html/body/div[1]/div[8]/div/div/div/div[2]/div[2]/div/div/button/div"
  );
  await reviewNow.click();
};

module.exports = review;
