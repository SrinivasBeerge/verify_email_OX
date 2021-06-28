This project is written to test email scenario for Open-Xchange.
word <b>EXTRA</b> is used when I have done extra work which is not asked in the question.

- It is written in Codeceptjs.
- Since we are testing only one test-case and need result ASAP I am using Puppeteer as a helper.
- <b>EXTRA</b> Allure is used for Reporting.
- <b>EXTRA</b> "Output" folder contain .xml which can be used to generate the HTML using (allure serve output)

Execution process:
- Login to the portal
- click on Compose
- key-in email, subject, body and click send
- wait for few seconds
- Click on the received email
- Read the body of the email
- assert if the body does not match the body used during email compose
- <b>EXTRA</b> Delete the email as a cleanup
- create .xml file in output folder for Allure to consume to create HTMl output.
