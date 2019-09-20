const puppeteer = require('puppeteer');
const scroll = require('puppeteer-autoscroll-down');
//const main = require('./signup');

module.exports = {
  loginform: async function main(page){

    await page.waitFor(2000);
    await page.waitForSelector('#customer_firstname');
    const username= "userjp";
    await page.type('#customer_firstname', username);

    await page.waitForSelector('#customer_lastname');
    const lastname = "shr"
    await page.type('#customer_lastname', lastname);

    await page.waitForSelector('#passwd');
    const pass = "123Admin@";
    await page.type('#passwd', pass);

    //await page.waitForSelector('#firstname');
   // const fname = "liam123";
    //await page.type('#firstname', fname);

   // await page.waitForSelector('#lastname');
   // const lname = "shr";
    //await page.type('#lastname', lname);
    await page.waitFor(1000);
    await page.waitForSelector('#address1');
    const address = "Nepal";
    await page.type('#address1', address);

    await page.waitFor(1000);
    await page.waitForSelector('#city');
    const city = "Bhaktapur";
    await page.type('#city', city);

    await page.waitFor(1000);
    await page.select("select#id_state", "5");

    //await page.waitFor(3000);
    await page.waitForSelector('#postcode');
    const code = "45440";
    await page.type('#postcode', code);

    await page.evaluate( () => {
      window.scrollBy(0, 400);
  });

   // await page.waitFor(3000);
    await page.waitForSelector('#phone_mobile');
    const phone_mobile = "9812345678";
    await page.type('#phone_mobile', phone_mobile);

   // await page.waitFor(3000);
    const aliasfield=await page.waitForSelector('#alias');
    const alias = "liamshr@gmail.com";
    await aliasfield.click({ clickCount: 3 })
    await page.type('#alias',alias);

    await page.waitFor(1000);
    const registerButton =await page.waitForSelector('#submitAccount');
    registerButton.click();
    
 }
  
}


// module.exports.loginform= {loginform};
