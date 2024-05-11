const betul={
    name1:"betül",
    age:20,
    gender:"female",
    address:{
        city:"Bursa",
        country:"turkey"
    },
    bf:"Furkan"
}

const {name1:isim , address,bf:eş}=betul
console.log(isim+"'ün eşi:"+eş);
console.log(address);


const siparis=(type,{name1})=>{
    console.log(name1+"'ün siparişi:"+type);
}

siparis("Furkan",betul)