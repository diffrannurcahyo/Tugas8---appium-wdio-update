import {$, driver} from '@wdio/globals'

class SearchPage {
    get searchButton() { return $('//android.view.ViewGroup[@content-desc="btnSearch"]'); }
    get searchInput() { return $('android.widget.EditText'); }
    get searchPanciButton() { return $('android=new UiSelector().className("android.view.ViewGroup").instance(26)'); }
    get imgPanci() { return $('//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[2]'); }
    get detailPanci() { return $('/hierarchy/android.widget.FrameLayout'); }

    async clickSearchButton() {
        await this.searchButton.click()
        await driver.pause(1000)
    }

    async setSearchInput(query) {
        await this.searchInput.setValue(query)
    }

    async clickSearchPanciButton() {
        await this.searchPanciButton.click()
        await driver.pause(1000)
    }

    async clickImgPanci() {
        await this.imgPanci.click()
        await driver.pause(1000)
    }

    async isDetailPanciDisplayed() {
        await this.detailPanci.waitForDisplayed({ timeout: 5000 })
        return this.detailPanci.isDisplayed()
    }
}

export default new SearchPage()