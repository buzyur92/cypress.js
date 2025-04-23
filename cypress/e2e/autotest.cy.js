//ммм если реально все это хочется проверить, тоооо могут возникнуть трудности я тут все просто сделал типа по DRY и POM через локаторы
//вообще зачем я это сделал не знаю, но я точно за то все запомню)
//заходим в папку e2e/helpers и меняем свойства тегов на рабочие в обоих файлах

import * as loginPage from "../locators/loginPage.json";
import * as logpas from "../helpers/logPas.json";
import * as mainPage from "../locators/mainPage.json";
import * as yourTrainerPage from "../locators/yourTrainerPage.json";
import * as shopAvatarPage from "../locators/shopAvatarPage.json";
import * as equaringPage from "../locators/equaringPage.json";
import * as platejka from "../helpers/platejka.json";
import * as acceptPayPage from "../locators/acceptPayPage.json";

describe('Проверка покупки аватара в битве покемонов', function() {

    beforeEach('Начало теста', function () {
        cy.visit('/');
          });
    
        it('e2e test pokupki avatara', function() {
            cy.get(loginPage.mailTittle).type(logpas.login);
            cy.get(loginPage.mainPassword).type(logpas.password);
            cy.get(loginPage.buttonEnter).click();

            cy.wait(2000); //ждули

            cy.get(mainPage.buttonTrainer).click();

            cy.wait(2000); //еще ждули

            cy.get(yourTrainerPage.changeAvatar).click();
            cy.get(shopAvatarPage.avatar).first().click();
            cy.get(equaringPage.number).type(platejka.cartNumber);
            cy.get(equaringPage.date).type(platejka.cartDate);
            cy.get(equaringPage.pass).type(platejka.cartCSV);
            cy.get(equaringPage.name).type(platejka.cartName);
            cy.get(equaringPage.buttonPay).click();
            cy.get(acceptPayPage.passAccept).type(platejka.passSMS);
            cy.get(acceptPayPage.buttonAccept).click();
            cy.contains('Покупка прошла успешно').should('be.visible');     

    })
})