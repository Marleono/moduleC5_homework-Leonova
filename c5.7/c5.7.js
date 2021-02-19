 const btn = document.querySelector('.j-btn');
    // Вешаем обработчик на кнопку для запроса
    btn.addEventListener('click', () => {
        //const value1 = document.getElementById('page').value;
        //const value2 = document.getElementById('limit').value;
        const page = parseInt(document.getElementById('page').value, 10);
        const limit = parseInt(document.getElementById('limit').value, 10);
        let s = document.getElementById('j-result');
        s.textContent = 'вне диапазона';
        let range = true;
        if ((Object.is(page, NaN) === true) ||
            (page < 1 || page > 10)
        ) {
            range = false;
            s.textContent = "page (Страница) " + s.textContent;
        }
        if ((Object.is(limit, NaN) === true) ||
            (limit < 1 || limit > 10)
        ) {
            range = false;
            s.textContent = "limit (Лимит) " + s.textContent;
        }
        if (range) {
            s.textContent = 'page and limit ok';
        }
        fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
            .then((response) => {
                response.json().then(function(data) {
                    //console.log(data);
                    for (let i = 0; i < data.length; i++) {
                        // console.log(data[i].download_url);
                        let elem = document.createElement("img");
                        elem.setAttribute("src", data[i].download_url);
                        document.getElementById("placehere").appendChild(elem);
                        console.log(elem)
                    }

                });

            });

    });