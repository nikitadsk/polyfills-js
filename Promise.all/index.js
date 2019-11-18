Promise.all = function (promises) {
  return new Promise(function (resolve, reject) {
    var promiseCount = promises.length; // запоминаем количество передаваемых промисов (можно и не запоминать, а просто ебануть promises.length в проверке)
    var resolveCount = 0; // количество зарезолвленных промисов
    var resolveData = []; // массив со всей зарезовленной инфой

    promises.forEach(function(value) { // бегаем по всем промисам
      value.then(function (data) { // резолвим их
        resolveCount++; // в случае удачи увеличиваем количество успехов на 1
        resolveData.push(data); // и пушим инфу в массив

        if (resolveCount === promiseCount) { // проверяем, зарезолвились ли все промисы
          resolve(resolveData); // резолвим
        }
      }, function(error) {
        reject(error); // если промис не зарезолвился, то дальше не продолжаем
      });
    });
  });
}