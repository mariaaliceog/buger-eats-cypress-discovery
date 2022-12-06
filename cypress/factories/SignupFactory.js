var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default{
    deliver: function (){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email:faker.internet.email(firstName),
            whatsapp: '11999999999',
            address:{
                postalcode: '07914060',
                street: 'Rua Olavo Bilac',
                number: '1000',
                details: 'apto 166',
                district: 'Jardim Magalhães',
                city_state: 'Francisco Morato/SP'
            }, 
            delivery_method: 'Moto',
            cnh:'cnh-digital.jpg'
        }
        return data
    }
}
