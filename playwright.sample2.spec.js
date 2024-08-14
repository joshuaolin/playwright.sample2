// @ts-check
const { test, expect, chromium } = require('@playwright/test');

let browser;
let context;
let page;

test.beforeEach(async () => {
  // Launch the browser in non-headless mode
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
  page = await context.newPage();
});

test.afterEach(async () => {
  // Close the browser after each test
  await browser.close();
});

test.describe('ESSILOR AMERA', () => {
  test('Validate ordering', async () => {
    await navigateToUrl(page, "https://www.essilorpro.io/amera/auth/login");
    await logIn(page, usernames[0], passwords[0]);
    await answerSurvey(page);
    await closeAnnouncement(page);
    const newPage = await navigateAndWaitForNewPage(page, "RX ORDERING");
    await newPage.waitForLoadState();
    await validateCurrentUrl(newPage, "https://essilor-order.com/amera/order/single-pair");
  });

  test('Validate tracking', async () => {
    await navigateToUrl(page, "https://www.essilorpro.io/amera/auth/login");
    await logIn(page, usernames[0], passwords[0]);
    await answerSurvey(page);
    await closeAnnouncement(page);
    const newPage = await navigateAndWaitForNewPage(page, "TRACKING");
    await newPage.waitForLoadState();
    await validateCurrentUrl(newPage, "https://essilor-order.com/amera/tracking");
  });
});

test.describe('ESSILOR MY', () => {
  test('Validate ordering', async () => {
    await navigateToUrl(page, "https://www.essilorpro.io/my/auth/login");
    await logIn(page, usernames[1], passwords[1]);
    await answerSurvey(page);
    await closeAnnouncement(page);
    const newPage = await navigateAndWaitForNewPage(page, "RX ORDERING");
    await newPage.waitForLoadState();
    await validateCurrentUrl(newPage, "https://essilor-order.com/my/order/single-pair");
  });

  test('Validate tracking', async () => {
    await navigateToUrl(page, "https://www.essilorpro.io/my/auth/login");
    await logIn(page, usernames[1], passwords[1]);
    await answerSurvey(page);
    await closeAnnouncement(page);
    const newPage = await navigateAndWaitForNewPage(page, "TRACKING");
    await newPage.waitForLoadState();
    await validateCurrentUrl(newPage, "https://essilor-order.com/my/tracking");
  });
});

test.describe('ESSILOR ZA', () => {
  test('Validate ordering', async () => {
    await navigateToUrl(page, "https://www.essilorpro.io/za/auth/login");
    await logIn(page, usernames[2], passwords[2]);
    await answerSurvey(page);
    await closeAnnouncement(page);
    const newPage = await navigateAndWaitForNewPage(page, "RX ORDERING");
    await newPage.waitForLoadState();
    await validateCurrentUrl(newPage, "https://essilor-order.com/za/order/single-pair");
  });

  test('Validate tracking', async () => {
    await navigateToUrl(page, "https://www.essilorpro.io/za/auth/login");
    await logIn(page, usernames[2], passwords[2]);
    await answerSurvey(page);
    await closeAnnouncement(page);
    const newPage = await navigateAndWaitForNewPage(page, "TRACKING");
    await newPage.waitForLoadState();
    await validateCurrentUrl(newPage, "https://essilor-order.com/za/tracking");
  });
});

test.describe('ESSILOR SG', () => {
  test('Validate ordering', async () => {
    await navigateToUrl(page, "https://www.essilorpro.io/sg/auth/login");
    await logIn(page, usernames[3], passwords[3]);
    await answerSurvey(page);
    await closeAnnouncement(page);
    const newPage = await navigateAndWaitForNewPage(page, "RX ORDERING");
    await newPage.waitForLoadState();
    await validateCurrentUrl(newPage, "https://essilor-order.com/sg/order/single-pair");
  });

  test('Validate tracking', async () => {
    await navigateToUrl(page, "https://www.essilorpro.io/sg/auth/login");
    await logIn(page, usernames[3], passwords[3]);
    await answerSurvey(page);
    await closeAnnouncement(page);
    const newPage = await navigateAndWaitForNewPage(page, "TRACKING");
    await newPage.waitForLoadState();
    await validateCurrentUrl(newPage, "https://essilor-order.com/sg/tracking");
  });
});

test.describe('ESSILOR PH', () => {
  test('Validate ordering', async () => {
    await navigateToUrl(page, "https://www.essilorpro.io/ph/auth/login");
    await logIn(page, usernames[4], passwords[4]);
    await answerSurvey(page);
    await closeAnnouncement(page);
    const newPage = await navigateAndWaitForNewPage(page, "RX ORDERING");
    await newPage.waitForLoadState();
    await validateCurrentUrl(newPage, "https://essilor-order.com/ph/order/single-pair");
  });

  test('Validate tracking', async () => {
    await navigateToUrl(page, "https://www.essilorpro.io/ph/auth/login");
    await logIn(page, usernames[4], passwords[4]);
    await answerSurvey(page);
    await closeAnnouncement(page);
    const newPage = await navigateAndWaitForNewPage(page, "TRACKING");
    await newPage.waitForLoadState();
    await validateCurrentUrl(newPage, "https://essilor-order.com/ph/tracking");
  });
});

test.describe('ESSILOR IN', () => {
  test('Validate ordering', async () => {
    await navigateToUrl(page, "https://www.essilorpro.io/in/auth/login");
    await logIn(page, usernames[5], passwords[5]);
    await answerSurvey(page);
    await closeAnnouncement(page);
    const newPage = await navigateAndWaitForNewPage(page, "RX ORDERING");
    await newPage.waitForLoadState();
    await validateCurrentUrl(newPage, "https://essilor-order.com/in/order/single-pair");
  });

  test('Validate tracking', async () => {
    await navigateToUrl(page, "https://www.essilorpro.io/in/auth/login");
    await logIn(page, usernames[5], passwords[5]);
    await answerSurvey(page);
    await closeAnnouncement(page);
    const newPage = await navigateAndWaitForNewPage(page, "TRACKING");
    await newPage.waitForLoadState();
    await validateCurrentUrl(newPage, "https://essilor-order.com/in/tracking");
  });
});

test.describe('ESSILOR ID', () => {
  test('Validate ordering', async () => {
    await navigateToUrl(page, "https://www.essilorpro.io/id/auth/login");
    await logIn(page, usernames[6], passwords[6]);
    await answerSurvey(page);
    await closeAnnouncement(page);
    const newPage = await navigateAndWaitForNewPage(page, "ORDER RX");
    await newPage.waitForLoadState();
    await validateCurrentUrl(newPage, "https://essilor-order.com/id/order/single-pair");
  });

  test('Validate tracking', async () => {
    await navigateToUrl(page, "https://www.essilorpro.io/id/auth/login");
    await logIn(page, usernames[6], passwords[6]);
    await answerSurvey(page);
    await closeAnnouncement(page);
    const newPage = await navigateAndWaitForNewPage(page, "TRACK");
    await newPage.waitForLoadState();
    await validateCurrentUrl(newPage, "https://essilor-order.com/id/tracking");
  });
});

test.describe('ESSILOR TH', () => {
  test('Validate ordering', async () => {
    await navigateToUrl(page, "https://www.essilorpro.io/th/auth/login");
    await logIn(page, usernames[7], passwords[7]);
    await answerSurvey(page);
    await closeAnnouncement(page);
    const newPage = await navigateAndWaitForNewPage(page, "สั่งซื้อเลนส์ Prescription (RX)");
    await newPage.waitForLoadState();
    await validateCurrentUrl(newPage, "https://essilor-order.com/th/order/single-pair");
  });

  test('Validate tracking', async () => {
    await navigateToUrl(page, "https://www.essilorpro.io/th/auth/login");
    await logIn(page, usernames[7], passwords[7]);
    await answerSurvey(page);
    await closeAnnouncement(page);
    const newPage = await navigateAndWaitForNewPage(page, "สถานะการสั่งซื้อ");
    await newPage.waitForLoadState();
    await validateCurrentUrl(newPage, "https://essilor-order.com/th/tracking");
  });
});

test.describe('ESSILOR TR', () => {
  test('Validate ordering', async () => {
    await navigateToUrl(page, "https://www.essilorpro.io/tr/auth/login");
    await logIn(page, usernames[8], passwords[8]);
    await answerSurvey(page);
    await closeAnnouncement(page);
    const newPage = await navigateAndWaitForNewPage(page, "RX SİPARİŞİ");
    await newPage.waitForLoadState();
    await validateCurrentUrl(newPage, "https://www.opakoptik.net/");
  });
});

test.describe('ESSILOR MA', () => {
  test('Validate ordering', async () => {
    await navigateToUrl(page, "https://www.essilorpro.io/ma/auth/login");
    await logIn(page, usernames[9], passwords[9]);
    await answerSurvey(page);
    await closeAnnouncement(page);
    const newPage = await navigateAndWaitForNewPage(page, "commander mes verres");
    await newPage.waitForLoadState();
    await validateCurrentUrl(newPage, "https://essilor-order.com/ma/order/single-pair");
  });

  test('Validate tracking', async () => {
    await navigateToUrl(page, "https://www.essilorpro.io/ma/auth/login");
    await logIn(page, usernames[9], passwords[9]);
    await answerSurvey(page);
    await closeAnnouncement(page);
    const newPage = await navigateAndWaitForNewPage(page, "SUIVI");
    await newPage.waitForLoadState();
    await validateCurrentUrl(newPage, "https://essilor-order.com/ma/tracking");
  });
});

/**
 * Navigates to the specified URL.
 * @param {import('@playwright/test').Page} page 
 * @param {string} url 
 */
async function navigateToUrl(page, url) {
  await page.goto(url);
}

/**
 * Logs in using the provided credentials.
 * @param {import('@playwright/test').Page} page 
 * @param {string} username 
 * @param {string} password 
 */
async function logIn(page, username, password) {
  try {
    await page.fill("//input[@id='user_id']", username);
    await page.fill("//input[@id='password']", password);
    await page.click("//button[@name='signin']");
  } catch (e) {
    console.log("Encountered issue in the login page:", e.message);
  }
}

/**
 * Closes the survey pop-up.
 * @param {import('@playwright/test').Page} page  
 */
async function answerSurvey(page) {
  try {
    const radioButtons = {
      "Smile": "//img[@src='../img/smile.png']",
      "Neutral": "//img[@src='../img/neutral.png']",
      "Sad": "//img[@src='../img/sad.png']"
    };

    const randomKey = Object.keys(radioButtons)[Math.floor(Math.random() * Object.keys(radioButtons).length)];
    const selectedRadioButton = radioButtons[randomKey];

    await page.waitForSelector(selectedRadioButton, { timeout: 5000 });
    await page.click(selectedRadioButton);

    await page.click("//button[contains(@class, 'default-btn')]");
    await page.click("//button[contains(@class, 'default-btn')]");
    console.log(`${randomKey} has been selected`);

  } catch (e) {
    console.log("Survey is not available, will proceed now to other steps:", e.message);
  }
}

/**
 * Closes the announcement pop-up.
 * @param {import('@playwright/test').Page} page  
 */
async function closeAnnouncement(page) {
  try {
    await page.waitForSelector("//button[contains(@class, 'float-right hidden-sm-and-down v-btn')]", { timeout: 5000 });
    await page.click("//button[contains(@class, 'float-right hidden-sm-and-down v-btn')]");
    console.log("Announcement pop-up has been closed");

  } catch (e) {
    console.log("Announcement is not available, will proceed now to other steps:", e.message);
  }
}

/**
 * Navigates to the chosen submenu.
 * @param {import('@playwright/test').Page} page  
 * @param {string} value 
 */
async function navigateTo(page, value) {
  try {
    await page.waitForSelector("//div[contains(@class, 'b2b-main-menu-item')]", { timeout: 5000 });
    await page.click("//div[contains(@class, 'b2b-main-menu-item')]");
    await page.waitForSelector(`//span[contains(text(), '${value}')]`, { timeout: 5000 });
    await page.click(`//span[contains(text(), '${value}')]`);
  } catch (e) {
    console.log("Encountered issue in the navigateTo function:", e.message);
  }
}

/**
 * Navigates to a submenu and waits for a new page to open.
 * @param {import('@playwright/test').Page} page  
 * @param {string} value 
 * @returns {Promise<import('@playwright/test').Page>}
 */
async function navigateAndWaitForNewPage(page, value) {
  try {
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      navigateTo(page, value)
    ]);
    return newPage;
  } catch (e) {
    console.log("Encountered issue in the navigateAndWaitForNewPage function:", e.message);
  }
}

/**
 * Validates the current URL.
 * @param {import('@playwright/test').Page} page
 * @param {string} expectedUrl
 */
async function validateCurrentUrl(page, expectedUrl) {
  const currentUrl = page.url();
  if (!currentUrl.includes(expectedUrl)) {
    throw new Error(`Found: ${currentUrl}`);
  }
  else {
    console.log(`Found: ${currentUrl}`);
  }
}
