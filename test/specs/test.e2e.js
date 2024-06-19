import { driver, $, expect } from '@wdio/globals';
import homePage from '../pageobjects/home.page.js';
import loginPage from '../pageobjects/login.page.js';
import searchPage from '../pageobjects/search.page.js';
import scrollScreen from '../../helpers/scrollScreen.js';

describe('Test Ruparupa Mobile', function() {

    it('User klik selanjutnya pada awal buka aplikasi', async function() {
        await homePage.clickNext()
        await homePage.clickNext()
        await homePage.clickNext()
        await homePage.clickFurnitur()
        await homePage.clickRak()
        await homePage.clickDapur()
        await homePage.clickNext()
        await homePage.clickOfficialAce()
        await homePage.clickNext()
        await homePage.clickAllow()
    })

    it('User Login menggunakan username yang salah menggunakan huruf', async function() {
        await loginPage.clickResourceButton()
        await loginPage.setUsername('qwertyuiop')
        await loginPage.clickLogin()
        expect(await loginPage.isErrorUsernameAbjDisplayed()).toBe(true)
    })

    it('User Login menggunakan username yang salah menggunakan angka dan huruf', async function() {
        await loginPage.clickResourceButton()
        await loginPage.setUsername('12345qwerty')
        await loginPage.clickLogin()
        expect(await loginPage.isErrorUsernameDisplayed()).toBe(true)
    })

    it.skip('User Login menggunakan username yang salah menggunakan angka', async function() {
        await loginPage.clickResourceButton()
        await loginPage.setUsername('4545454')
        await loginPage.clickLogin()
        expect(await loginPage.isErrorUsernameDisplayed()).toBe(true)
    })

    it.skip('User Login menggunakan username yang benar dan password yang salah', async function() {
        await loginPage.clickResourceButton()
        await loginPage.setUsername('085600274942')
        await loginPage.clickLogin()
        await loginPage.setPassword('WrongPassword')
        await loginPage.clickLogin()
        expect(await loginPage.isErrorDisplayed()).toBe(true)
    })

    it('User Login menggunakan username dan password yang benar', async function() {
        await loginPage.clickResourceButton()
        await loginPage.setUsername('085600274942')
        await loginPage.clickLogin()
        await loginPage.setPassword('Tomcleverley15')
        await loginPage.clickLogin()
    })

    it('User melakukan pencarian barang', async function() {
        await searchPage.clickSearchButton()
        await searchPage.setSearchInput('Panci')
        await searchPage.clickSearchPanciButton()
    })

    it('User klik gambar panci', async function() {
        await driver.pause(3000)
        await scrollScreen(800, 100)
        await searchPage.clickImgPanci()
        await homePage.clickAllow()
    })

    it('User menampilkan detail panci', async function() {
        expect(await searchPage.isDetailPanciDisplayed()).toBe(true)
    })
})
