package create.compte.steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import create.compte.LoginAccount;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class InvalidSteps {
	WebDriver driver;
	LoginAccount login;

	@Given("user is login in page")
	public void is_login_in_page() {
		System.out.println("user is in login page");
		//System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
		 WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://www.mytek.tn/");
		WebDriverWait wait = new WebDriverWait(driver, 5);
		WebElement textButton = wait
				.until(ExpectedConditions.elementToBeClickable(By.xpath("//header/div[1]/div[1]/ul[1]/li[2]/a[1]")));
		textButton.click();

	}

	@When("user enters wrong email and password")
	public void user_enters_wrong_email_and_password(){
		System.out.println("user enters email and password");
	    login = new LoginAccount(driver);
		login.mail();
		login.enterpassword();
		
	}

	@And("selected the login button")
	public void selected_the_login_button() {
		System.out.println("user clicks on login button");
		login.clickConnexion();
	}

	@Then("user is in home page")
	public void user_is_in_home_page() {
		System.out.println("user is navigated in home page");
	
		if(driver.getPageSource().contains("Bienvenue,oussema taalaoui!")) {
			System.out.println("utilisateur connecté");
		}
			else {
				System.out.println("utilisateur non connecté");
			}
	}

}


