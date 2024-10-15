let customers = [
    {id:1, name:"Lannie Huddlestone", age:71, address:{city:"Kuala Terengganu", street:"7678 5th Parkway", house:177}, newsLetter: false},
    {id:2, name:"Filip Eslie", age:43, address:{city:"Hingatungan", street:"3 Farwell Lane", house:148}, newsLetter: true},
    {id:3, name:"Tally Birchett", age:54, address:{city:"Ciudad del Este", street:"03 Marcy Drive", house:155}, newsLetter: false},
    {id:4, name:"Tera Knotte", age:27, address:{city:"Chon Buri", street:"34811 Dixon Center", house:146}, newsLetter: true},
    {id:5, name:"Conn Sponder", age:55, address:{city:"Beberon", street:"38256 Elmside Court", house:91}, newsLetter: true},
    {id:6, name:"Margaret Hevey", age:80, address:{city:"Liuhe", street:"789 Vernon Center", house:59}, newsLetter: false},
    {id:7, name:"Jilli Tunnick", age:87, address:{city:"Linton", street:"6555 Kennedy Alley", house:62}, newsLetter: true},
    {id:8, name:"Casey Peevor", age:39, address:{city:"Linton", street:"6555 Kennedy Alley", house:62}, newsLetter: false},
    {id:9, name:"Ashlie Wozencraft", age:23, address:{city:"Espinosa", street:"78 Pepper Wood Terrace", house:11}, newsLetter: false},
    {id:10, name:"Jonas Tungate", age:83, address:{city:"Padangulaktanding", street:"224 Manley Drive", house:49}, newsLetter: true}
]
function isAddress(address) {
    if (
      typeof address.city === "string" &&
      address.city !== null &&
      typeof address.street === "string" &&
      address.street !== null &&
      typeof address.house === "number" &&
      Number.isInteger(address.house) &&
      address.house !== null
    ) {
      return true;
    } else {
      return false;
    }
  }

  function isCustomer(name, age, address, newsLetter) {
    let logic = false
    customers.forEach(element => {
        if (element[name] === name && element[age] === age && element[address] === address && element[newsLetter] === newsLetter) logic = true
    })
    return logic
}

function modifyCustomer (customer){
    let users=[...customers];
    if (
        typeof customer["name"] === "string" &&
        customer["name"] !== null &&
        typeof customer["age"] === "number" &&
        Number.isInteger(customer["age"]) &&
        isAddress(customer["address"]) &&
        customer["age"] !== null &&
        typeof customer["newsLetter"] === "boolean" &&
        customer["newsLetter"] !== null
      ) {
        if (users.length==0) {
            return false
        }
        let index=-1
        for (let i = 0; i < users.length; i++) {
            if (users[i]["id"]==customer["id"]) {
                index=i
            }
        }
        if (index===-1) {
            return false
        }
        users[index]["name"]=customer["name"]
        users[index]["age"]=customer["age"]
        users[index]["address"]=customer["address"]
        users[index]["newsLetter"]=customer["newsLetter"]
        return users
      }
      else{
        return false
      }
}

module.exports = modifyCustomer;