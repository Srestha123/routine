class Users{
    construtor(){

    }
    update(name){
        database.ref('users/').update({
            name:name
        })
    }
}