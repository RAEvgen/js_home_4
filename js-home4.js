//Homework 4.
// Задача 1. Функция поиска строки в строке

(function(){
    'use strict';

    function searchStrA(str1, str2){
        var c = String(str1);
        var arr1 = c.split('');
        var g = String(str2);
        var arr2 = g.split('');
        for (var i = 0; i < arr2.length; i++){
            for(var j = 0; j < arr1.length; j++){
                if(arr2[i] == arr1[j]){
                    console.log('В строке '+ c + ' найден элемент ' + arr2[i] + ' Его позиция:' + arr1.indexOf(arr2[i]));
                }
            }
        }
    }
    searchStrA('String with "bla-bla-bla"', 'bla');

//задание №2.

var city1 = {
    name: 'SPb',
    population: 1000,
    mayor: 'Igor',
    sumPeople: function(quantity){
        city1.population += (quantity - city2.population);
    }
}

var city2 = {}
    city2.name = 'Moscow';
    city2.population = 2000;
    city2.mayor = 'Oleg';

function cityInfo(city){
     for(var i in city){
        var x = city[i];
        console.log('имя_св-ва:' + i + ',' + 'Значение:' + city[i]);
        if(typeof x == 'object'){
            for (var j = 0; j < x.length; j ++){
                console.log(x[j]);
            }
        }
    }
}

var president = {
    changeMayor: function(obj, name){
        if(typeof obj == 'object'){
            obj.mayor = name;
        }
    }
}
console.log(president.changeMayor(city1, 'Masha'), city1.mayor);

//задание №3.

function validateData(data, flag){
    parseInt(data);
    if(typeof flag == 'number'){
       return typeof data == 'number' ? data : false;
    }
    if(typeof flag == 'operator'){
        var arr = ['+','-','*','/'];
        for(i = 0; i < arr.length; i++){
            if (data == arr[i]){
                return data; 
            } else break;
        }
    }
}

}());



