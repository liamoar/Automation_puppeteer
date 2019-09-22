const puppeteer = require('puppeteer');
const cartObj = require('./addToCartElement');
(async function main(){
    try {
        const browser = await puppeteer.launch({
            headless: false,
            //args: ['--start-fullscreen'],
            //args: ['--start-maximized'],
            defaultViewport: null,
          });

       const page = await browser.newPage();
       await page.goto('http://automationpractice.com/', {waitUntil: 'load', timeout: 0});
       console.log("cart page called");
       const navigationPromise= page.waitForNavigation();

        const signinbutton=await page.waitForSelector('.login');
        signinbutton.click();
        //apple.getdata();
        await navigationPromise;
        
        await page.waitForSelector('#email');
        await page.type('#email',"testmanuser@gmail.com");
        
        await page.evaluate( () => {
            window.scrollBy(0, 400);
        });
        await page.waitForSelector('input[id="passwd"]');
        await page.type('input[id="passwd"]',"123Admin@");

        const loginButton=await page.waitForSelector('#SubmitLogin');
        loginButton.click();

        await navigationPromise;
        cartObj.cartFunction(page, navigationPromise);

       

    } catch (error) {
        console.log("cart function error is: ",error)
    }
})()