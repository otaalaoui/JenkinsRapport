package create.compte;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class EditNom {
	

		WebDriver driver;
		By btn_create = (By.id("iddkdILUfk"));
		By btn_editer = (By.xpath("//body[1]/div[2]/main[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[2]/a[1]/span[1]"));
		By text_name = (By.id("firstname"));
		By text_Fname = (By.id("firstname"));
		By btn_sauvgarder = (By.xpath("//span[contains(text(),'Sauvegarder')]"));

		public EditNom(WebDriver driver) {
			this.driver = driver;
		}

		public void clickboutoncreate() {
			driver.findElement(btn_create).click();

		}

		public void clickboutonediter() {
			driver.findElement(btn_editer).click();
		}

		public void ClearSpace() {
			driver.findElement(text_name).clear();
		}

		public void newFirstname(String new_first_name) {
			driver.findElement(text_Fname).sendKeys(new_first_name);
		}

		public void sauvgarder() {
			driver.findElement(btn_sauvgarder).click();

		}
	}


