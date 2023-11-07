package create.compte;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class InvalidCred {
	
		WebDriver driver;
		By text_email = By.name("login[username]");
		By text_password = By.name("login[password]");
		By btn_Connexion = By.id("send2");

		public InvalidCred(WebDriver driver) {
			this.driver = driver;
		}

		public void mail() {
			driver.findElement(text_email).sendKeys("oussabn30@gmail.com");
			
		}

		public void enterpassword() {
			driver.findElement(text_password).sendKeys("Taalaoui14");
		}

		public void clickConnexion() {
			driver.findElement(btn_Connexion).click();
		}

		
		
	}


