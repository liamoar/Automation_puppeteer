const puppeteer = require('puppeteer');
const form = require('./Signupform');
const emaildata= require('../constant');
//console.log(emaildata);

(async function siginFucton(){

    try{
        //const browser = await puppeteer.launch({headless : false});
        const browser = await puppeteer.launch({
            headless: false,
            //args: ['--start-fullscreen'],
            //args: ['--start-maximized'],
            defaultViewport: null,
          });

       const page = await browser.newPage();
        //await page.setViewport({width: 1920, height: 1080});
        //await page.setViewport({width: 1366, height: 800});
        await page.goto('http://automationpractice.com/', {waitUntil: 'load', timeout: 0});

        const navigationPromise= page.waitForNavigation({ timeout: 50000 });
        console.log("sigin page called");
        
        //const signin = await page.$('a[class="login"]');
        const signinbutton=await page.waitForSelector('.login');
        signinbutton.click();

        await navigationPromise;
        await page.waitFor(1000);
       // await page.screenshot({path: 'example.png'});
        //search for email field
        await page.waitForSelector('#email_create')
        const num= Math.floor((Math.random()*999) + 50);
        const email = "test"+num+"@gmail.com" 
        //onst email= await page.type('#email_create','test'+num+'@gmail.com');
        
        await page.evaluate((email)=>{
            //console.log("check",emaildata);
            window.localStorage.setItem("email",email);
        });
  
        await page.type('#email_create',email);
        //console.log("siginin: ",emaildata.getEmail);
        
        
        const createAccountButton =await page.waitForSelector('#SubmitCreate')
        createAccountButton.click({waitUntil: 'load', timeout: 0});

        await navigationPromise;
        //await page.waitFor(1000);
        form.loginform(page, {waitUntil: 'load', timeout: 0});
        
        console.log("Phase one complete");
         
        //await navigationPromise;
        //await page.waitFor(5000);
        //const cartObj = require('./addToCartElement');
       // cartObj.cartFunction(page);
        
    }
    catch(error){
        console.log('error shown is: ',error)
    }

})()



