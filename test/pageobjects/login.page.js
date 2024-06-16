import {$, driver} from '@wdio/globals'

class LoginPage {
    get resourceButton() { return $('android=new UiSelector().className("android.widget.Button").instance(4)'); }
    get usernameInput() { return $('android.widget.EditText'); }
    get loginButton() { return $('//android.widget.TextView[@text="Lanjutkan"]'); }
    get passwordInput() { return $('//android.widget.EditText[@text="Masukkan kata sandi"]'); }
    get errorMessagePassword() { return $('//android.widget.TextView[@text="Kata sandi yang kamu masukkan salah."]'); }
    get errorMessageUsername() { return $('//android.widget.TextView[@text="Pastikan nomor handphone yang kamu masukkan benar"]'); }
    get errorMessageUsername() { return $('//android.widget.TextView[@text="Pastikan nomor handphone yang kamu masukkan benar"]'); }
    get errorMessageUsernameAbj() { return $('//android.widget.TextView[@text="Pastikan data yang kamu masukkan benar"]'); }

    async clickResourceButton() {
        await this.resourceButton.click()
        await driver.pause(500)
    }

    async setUsername(username) {
        await this.usernameInput.setValue(username)
    }

    async clickLogin() {
        await this.loginButton.click()
        await driver.pause(500)
    }

    async setPassword(password) {
        await this.passwordInput.setValue(password)
    }

    async isErrorDisplayed() {
        return this.errorMessagePassword.isDisplayed()
    }

    async isErrorUsernameDisplayed() {
        return this.errorMessageUsername.isDisplayed()
    }

    async isErrorUsernameAbjDisplayed() {
        return this.errorMessageUsernameAbj.isDisplayed()
    }
}

export default new LoginPage()
