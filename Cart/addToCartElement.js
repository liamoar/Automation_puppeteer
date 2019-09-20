const scroll = require('puppeteer-autoscroll-down');
//const getdata = require('./signup');

module.exports = {
    cartFunction: async function main(page){

        
        await page.waitFor(1000);
        const womenTab=await page.waitForSelector('a[title="Women"]');
        womenTab.click();
        
        await page.waitFor(1000);
        const product1 = await page.waitForSelector('div[class="product-image-container"]');
        product1.click();

        await page.frames()[0];
        
        const addToCart1 =await page.waitForSelector('button[class="exclusive"]');
        addToCart1.click();

        const continueShopping = await page.waitForSelector('i[class="icon-chevron-left left"]');
        continueShopping.click();



    }
}