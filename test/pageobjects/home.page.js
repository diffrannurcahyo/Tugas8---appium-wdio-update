import {$, driver} from '@wdio/globals'

class HomePage {
    get nextButton() { return $('~btnSelanjutnya'); }
    get furniturButton() { return $('~btnKategoriFurnitur'); }
    get rakButton() { return $('~btnKategoriRak dan Penyimpanan'); }
    get dapurButton() { return $('~btnKategoriDapur Minimalis'); }
    get officialAceButton() { return $('~btnOfficialPartnerace'); }
    get allowButton() { return $('//android.widget.Button[@resource-id="com.android.packageinstaller:id/permission_allow_button"]'); }

    async clickNext() {
        await this.nextButton.click()
        await driver.pause(500)
    }

    async clickFurnitur() {
        await this.furniturButton.click()
    }

    async clickRak() {
        await this.rakButton.click()
    }

    async clickDapur() {
        await this.dapurButton.click()
    }

    async clickOfficialAce() {
        await this.officialAceButton.click()
    }

    async clickAllow() {
        await this.allowButton.click()
    }
}

export default new HomePage()
