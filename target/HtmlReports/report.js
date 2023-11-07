$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/project.features/compte.feature");
formatter.feature({
  "name": "Creating a new user account",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Create an account with valid information",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on the account creation page",
  "keyword": "Given "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.is_login_in_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00272.50.1\u0027, revision: \u0027d7fc91b29de65b790abb01f3ac5f7ea2191c88a7\u0027, time: \u00272016-01-29 11:11:26\u0027\nSystem info: host: \u0027TALAN-EMP9E8C\u0027, ip: \u002710.70.0.160\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8.1\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:665)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:170)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:159)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat create.compte.steps.CompteSteps.is_login_in_page(CompteSteps.java:26)\r\n\tat ✽.user is on the account creation page(file:///C:/Users/otaalaoui/Desktop/act10/cucumberproject2/src/test/resources/project.features/compte.feature:4)\r\nCaused by: org.openqa.selenium.WebDriverException: Unable to convert: {desiredCapabilities\u003dCapabilities [{browserName\u003dchrome, chromeOptions\u003dorg.openqa.selenium.chrome.ChromeOptions@1b550c0, version\u003d, platform\u003dANY}]}\nBuild info: version: \u00272.50.1\u0027, revision: \u0027d7fc91b29de65b790abb01f3ac5f7ea2191c88a7\u0027, time: \u00272016-01-29 11:11:26\u0027\nSystem info: host: \u0027TALAN-EMP9E8C\u0027, ip: \u002710.70.0.160\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8.1\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.BeanToJsonConverter.convert(BeanToJsonConverter.java:69)\r\n\tat org.openqa.selenium.remote.http.JsonHttpCommandCodec.encode(JsonHttpCommandCodec.java:228)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:644)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:249)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:144)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:170)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:159)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:116)\r\n\tat create.compte.steps.CompteSteps.is_login_in_page(CompteSteps.java:26)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:93)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:40)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:529)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:756)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:452)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\nCaused by: org.openqa.selenium.WebDriverException: Unable to convert: {desiredCapabilities\u003dCapabilities [{browserName\u003dchrome, chromeOptions\u003dorg.openqa.selenium.chrome.ChromeOptions@1b550c0, version\u003d, platform\u003dANY}]}\nBuild info: version: \u00272.50.1\u0027, revision: \u0027d7fc91b29de65b790abb01f3ac5f7ea2191c88a7\u0027, time: \u00272016-01-29 11:11:26\u0027\nSystem info: host: \u0027TALAN-EMP9E8C\u0027, ip: \u002710.70.0.160\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8.1\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.BeanToJsonConverter.convertObject(BeanToJsonConverter.java:88)\r\n\tat org.openqa.selenium.remote.BeanToJsonConverter.convert(BeanToJsonConverter.java:66)\r\n\t... 49 more\r\nCaused by: org.openqa.selenium.WebDriverException: java.lang.reflect.InvocationTargetException\nBuild info: version: \u00272.50.1\u0027, revision: \u0027d7fc91b29de65b790abb01f3ac5f7ea2191c88a7\u0027, time: \u00272016-01-29 11:11:26\u0027\nSystem info: host: \u0027TALAN-EMP9E8C\u0027, ip: \u002710.70.0.160\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8.1\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat org.openqa.selenium.remote.BeanToJsonConverter.convertObject(BeanToJsonConverter.java:233)\r\n\tat org.openqa.selenium.remote.BeanToJsonConverter.convertObject(BeanToJsonConverter.java:143)\r\n\tat org.openqa.selenium.remote.BeanToJsonConverter.convertObject(BeanToJsonConverter.java:189)\r\n\tat org.openqa.selenium.remote.BeanToJsonConverter.convertObject(BeanToJsonConverter.java:143)\r\n\tat org.openqa.selenium.remote.BeanToJsonConverter.convertObject(BeanToJsonConverter.java:86)\r\n\t... 50 more\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.openqa.selenium.remote.BeanToJsonConverter.convertObject(BeanToJsonConverter.java:218)\r\n\t... 54 more\r\nCaused by: java.lang.NoSuchMethodError: \u0027com.google.common.collect.ImmutableList com.google.common.collect.ImmutableList.copyOf(java.util.Collection)\u0027\r\n\tat org.openqa.selenium.chrome.ChromeOptions.toJson(ChromeOptions.java:213)\r\n\t... 59 more\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters their first name",
  "keyword": "When "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_enters_their_first_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters their last name",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_enters_their_last_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters their company name",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_enters_their_company()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters their phone number",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_enters_their_phone_number()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters their complete address",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_enters_their_complete_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects the country",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_selects_the_country()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects the state",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_selects_the_state()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects a city",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_selects_a_city()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects a locality",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_selects_a_locality()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects a postal code",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_selects_a_postal_code()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters their email address",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_enters_their_email_address()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters a password",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_enters_a_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user confirms the password",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_confirms_the_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on the create account button",
  "keyword": "And "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.clicks_on_the_create_account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user account is successfully created",
  "keyword": "Then "
});
formatter.match({
  "location": "create.compte.steps.CompteSteps.user_account_is_successfully_created()"
});
formatter.result({
  "status": "skipped"
});
});