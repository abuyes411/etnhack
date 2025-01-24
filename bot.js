const puppeteer = require('puppeteer');

async function getWebsiteInfo(url) {
  // Launch Puppeteer and open a new page
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Navigate to the provided URL
  await page.goto(url);

  // Get the title of the webpage
  const title = await page.title();

  // Print the title
  console.log(`The title of the website is: ${title}`);

  // Close the browser
  await browser.close();
}

// Example usage: Replace this URL with any website you want to check
const websiteUrl = 'https://www.google.com';
getWebsiteInfo(websiteUrl);
