const scroll = require('puppeteer-autoscroll-down');
//const getdata = require('./signup');

module.exports = {
    cartFunction: async function main(page, navigationPromise){

        try {
            
        await page.waitFor(1000);
        const womenTab=await page.waitForSelector('a[title="Women"]');
        womenTab.click();
        
        //await page.waitFor(1000);
        navigationPromise;
        const product1 = await page.waitForSelector('div[class="product-image-container"]');
        product1.click();

        //await page.frames()[0];
        
        const addToCart1 =await page.waitForSelector('button[class="exclusive"]');
        addToCart1.click();

        await page.waitFor(2000);
        await page.frames()[0];
        const continueShopping = await page.waitForSelector('span[title="Continue shopping"]');
        continueShopping.click();

        //go to new category

        await page.goto('http://automationpractice.com/index.php?id_category=8&controller=category');
        navigationPromise;

        await page.waitFor(1000);
        const product2 = await page.waitForSelector('div[class="product-image-container"]');
        product2.click();

        const addToCart2 =await page.waitForSelector('button[class="exclusive"]');
        addToCart2.click();

        await page.waitFor(2000);
        await page.frames()[0];
        const proceedToCheckout= await page.waitForSelector('a[title="Proceed to checkout"]');
        proceedToCheckout.click();
        
        navigationPromise;
        //await page.waitFor(2000);
        const proceedToCheckout1= await page.waitForSelector('a[class="button btn btn-default standard-checkout button-medium"]');
        proceedToCheckout1.click();
        
        //await page.waitFor(2000);
        navigationPromise
        //await page.waitFor(2000);
        const proceedToCheckout2= await page.waitForSelector('button[name="processAddress"]');
        proceedToCheckout2.click();

        navigationPromise
        await page.waitFor(3000);
        const terms = await page.waitForSelector('input[type="checkbox"]');
        terms.click();
        const proceedToCheckout3= await page.waitForSelector('button[name="processCarrier"]');
        proceedToCheckout3.click();

        navigationPromise;
        //await page.waitFor(2000);
        //const payByCheck = await page.waitForSelector('a[class="cheque"]');
        const payByCheck = await page.waitForSelector('p.payment_module > a.cheque');
        payByCheck.click();

        navigationPromise;
        //await page.waitFor(2000);
        const conformOrder = await page.waitForSelector('button[class="button btn btn-default button-medium"]');
        conformOrder.click();

        } catch (error) {
            console.log("cartElement error: ",error)
        }
        

    }
}