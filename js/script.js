let calculation = document.querySelector('.calculation');                   //Кнопка расчета
let Clear = document.querySelector('.Clear');                               //Кнопка очистки
let select_month = document.querySelector('.select-month');                 //Месяц
let price = document.querySelector('.price');                               //Стоимость 1 дня 
let name = document.querySelector('.name');                                 //ФИО
let kolvo = document.querySelector('.kolvo');                                 //Количество дней
let input_price =document.querySelector('.input-price');                    //Допуслуги

document.querySelector('.price').value = 600;

select_month.addEventListener('change', () => {
    let getMonthValue = document.querySelector('.select-month').value;
    if((getMonthValue == "Январь")|(getMonthValue == "Декабрь")|(getMonthValue == "Февраль")){
        document.querySelector('.price').value = 600;
    }
    else if((getMonthValue == "Сентябрь")|(getMonthValue == "Октябрь")|(getMonthValue == "Ноябрь")|(getMonthValue == "Март")|(getMonthValue == "Апрель")|(getMonthValue == "Май")){
        document.querySelector('.price').value = 400;
    }
    else{
        document.querySelector('.price').value = 300;
    }
});

calculation.onclick = function ()                           //Кнопка рассёта
    {   
        if(name.value !=""){
        let kolvo_day = + kolvo.value;                          //Присваиваем значения "Растояние"
        let data = document.querySelector('.select-month').value;
        let dop_usluga=0;
        // document.querySelector('.input-price').innerHTML = ""+data;
        console.log('Привет от JavaScript!'+ data);
        if(data== "Январь" | data== "Декабрь"| data== "Февраль"){
            one_day=600;
            price.value=600;   
        }
        if(data== "Июнь" |data== "Июль" | data== "Август"){
            one_day = 300; 
            price.value=300;
        }
        if(data== "Сентябрь" |data== "Октябрь" | data== "Ноябрь" | data== "Март" |data== "Апрель" | data== "Май"){
            one_day = 400;
            price.value=400;   
        }

        let usluga = document.querySelector('.usluga').value;
        if(usluga == "Веселый мяч" ){
            dop_usluga=2000;
        } 
        if(usluga == "Каляка-маляка"){
            dop_usluga = 3000; 
        }
        if(usluga == "Вокал" ){
            dop_usluga = 2500;
        }
        if(usluga == "Нет" ){
            dop_usluga=0;
        }
        input_price.value = kolvo_day * one_day  + dop_usluga+"₽";
    }
    else{
        alert('Введите ФИО');
    }
}


Clear.onclick = function ()                             //кнопка очистки
    {
        price.value="600";
        name.value="";
        kolvo.value="1";
        input_price.value="";
        document.querySelector('.select-monthh').value='Нет';
        document.querySelector('.usluga').value='Январь';
    }
