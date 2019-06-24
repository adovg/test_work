// item example
// {
//   name: 'Name', 
//   description: 'Description', 
//   expirationDate: '01-30-1999' 
// }

//////////////////////////////Получаем отформатированную текущую дату для сравнения /////////
function formatDate(date) {

  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = date.getFullYear();
  
  return (`${mm}-${dd}-${yy}`);
};

let d = new Date(); 
let data = formatDate(d); // current date
//console.log( data );
//////////////////////////////Получаем отформатированную текущую дату для сравнения /////////



let item = {
  name: 'Name', 
  description: 'Description', 
  expirationDate: '06-24-2019' 
};


const filterByExpiration = (items) => {
  // change this function to return only current items
  // where expirationDate > today's date
  let arrKey = '';
  
  for (let key in items) {
    arrKey = items[key];
  }
 
  if (arrKey == data) {
    return items 
  } else {
    alert('no matches')
  }
  
};

console.log(filterByExpiration(item));


/// так же я решил эту задачу в случае если мы получаем массив с объектами, как в файле index.html, приложу ссылку на codepan т.к. не до конца понял, нужен ли такой вариант решения или нет (https://codepen.io/kroatoan/pen/orWEVa) 