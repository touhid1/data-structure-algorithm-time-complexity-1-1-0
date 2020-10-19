class Dictionary  {
    constructor(){
        this.dictionary = {};
    }
    add(key, value){
        this.dictionary[key] = value;
    }
    get(key){
        return this.dictionary[key];
    }
}
const phone = new Dictionary();
phone.add('Sakib','01932849203');
phone.add('Alfa','01932846433');
phone.add('Bolda','01932849546');
phone.add('kana','01932849543');
phone.add('karima','01932849443');
console.log(phone.dictionary);
const kana = phone.get('kana');
console.log(kana);