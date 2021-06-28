Feature('Verify_email_test1');

Scenario('verify_email_test_tc1', ({ I }) => {
    // route to default url provided in config file
    I.amOnPage('/') 

    // Fill login page and click on sign-in
    // Email: "applause86@applause.ox"
    // Password: "1ArBuO61" (Hard-coded for now, but will then go to config file in production.)
    I.waitForClickable("//input[@id='io-ox-login-username']") // wait till username field is clickable to accept the text
    I.fillField("//input[@id='io-ox-login-username']", "applause86@applause.ox") //fill username
    I.fillField("//input[@id='io-ox-login-password']", "1ArBuO61") // fill password
    I.uncheckOption("//body[1]/div[3]/div[2]/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[6]/div[1]/div[1]/label[1]/i[1]") // uncheck stay signed-in
    I.waitForClickable("//button[@id='io-ox-login-button']", 5)
    I.click("//button[@id='io-ox-login-button']") // click login button

    // Compose email:
    // email: "applause86@qa.open-xchange.com"
    // Subject: Send Email Test.
    // Body: "Testing the Send Email Functionality."
    // Exit: Email sent
    // Explicit wait since handling only popup window to enter text
    I.waitForElement("//body[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/ul[1]/li[1]/a[1]", 5) // Waits till it see element "Compose"
    I.click("//body[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/ul[1]/li[1]/a[1]")
    I.wait(2) 
    I.fillField("//body[1]/div[3]/div[5]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]", "applause86@qa.open-xchange.com")
    I.wait(2)
    I.fillField("//body[1]/div[3]/div[5]/div[1]/div[2]/div[1]/div[4]/div[1]/div[1]/div[1]/div[6]/div[1]/input[1]", "Send Email Test.")
    I.wait(2)
    msg = "Testing the Send Email Functionality."
    I.click("//body")
    I.type(msg)
    I.wait(2)
    I.click("//body[1]/div[3]/div[5]/div[1]/div[2]/div[1]/div[5]/div[1]/button[1]")

    // Reading email:
    // Click on the first unread email
    // fetch the text from the body of the email
    // assert when the email body mis-match
    I.waitForElement("//body[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[4]/div[3]/div[1]/div[3]/ul[2]/li[2]", 10)
    I.click("//body[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[4]/div[3]/div[1]/div[3]/ul[2]/li[2]")
    I.waitForElement("//body[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[4]/div[3]/div[2]/div[1]/div[1]/div[2]/article[1]/section[6]", 5)
    value1 = I.grabTextFrom("//body/div[@id='io-ox-core']/div[@id='io-ox-screens']/div[@id='io-ox-windowmanager']/div[@id='io-ox-windowmanager-pane']/div[@id='window-0']/div[1]/div[4]/div[3]/div[2]/div[1]/div[1]/div[2]/article[1]/section[6]/iframe[1]")
    I.wait(5)
    let assert = require("assert")
    assert.notStrictEqual(value1, msg, "Email body mis-match")
    I.wait(2)

    // Tear-down: Delete message after the test execution.
    I.click("//body[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/div[4]/div[2]/ul[1]/li[5]/a[1]/i[1]")
    I.wait(2) // To have a complete clean-up

});
