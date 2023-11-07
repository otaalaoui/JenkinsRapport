package create.compte.steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import create.compte.EditNom;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class EditSteps {

		WebDriver driver;
		EditNom Mod;
		@Given("user is logged in")
		public void user_is_logged_in() {
			
				System.out.println("user is in login page");
				System.setProperty("webdriver.chrome.driver", "./drivers/chromedriver.exe");
				driver = new ChromeDriver();
				driver.manage().window().maximize();
				driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
				driver.get("https://www.mytek.tn/");
				WebDriverWait wait = new WebDriverWait(driver, 5);
				WebElement textButton = wait
						.until(ExpectedConditions.elementToBeClickable(By.xpath("//header/div[1]/div[1]/ul[1]/li[2]/a[1]")));
				textButton.click();

			}
		

		@When("user navigates to profile settings")
		public void user_navigates_to_profile_settings() {
		  Mod = new EditNom(driver);
		  Mod.clickboutoncreate();
		}

		@When("user clicks on edit profile")
		public void user_clicks_on_edit_profile() {
		    Mod.clickboutonediter();
		    Mod.ClearSpace();
		}
		

		@When("user enters new first name oussama")
		public void user_enters_new_first_name_oussama(String new_first_name) {
			System.out.println("user enters new first name");
			Mod = new EditNom(driver);
			Mod.newFirstname(new_first_name);
			
		}

		@When("user clicks on save button")
		public void user_clicks_on_save_button() {
		 Mod.sauvgarder();
		}

		@Then("user should see a success message")
		public void user_should_see_a_success_message() {
		    System.out.println("modification done");
		}

		

		@When("user enters new last name")
		public void user_enters_new_last_name_taalaoui(String new_first_name ) {
				System.out.println("user enters new first name");
				Mod = new EditNom(driver);
				Mod.newFirstname(new_first_name);
		
		}
		@Then("user see a success message")
		public void user_see_a_success_message() {
		    System.out.println("modification done");
		}

		


	}



