// * строка в формате JSON *
let jsonForm = '{"0":{"form":{"action":"#","name":"one","method":"GET","style":"display: block; padding: 5px; background: #cfcfcf; border: 1px solid #737373; width: 317px; margin:5px"}},"1":{"p":{"id":"startText","formText":"Предлагаем Вам заполнить эту форму, что бы мы смогли присылать Вам на почту кучу ненужного спама и звонить на Ваш номер среди ночи, и пытаться обмануть Вас на деньги! Скорее время ограниченно!","style":"display: block; fontsize: 20px; margin:5px; color: red; text-align: justify"}},"2":{"label":{"for":"id_text","formText":"Фамилия, Имя, Отчество","style":"display: block; fontsize: 20px; margin:5px"}},"3":{"input":{"type":"text","id":"id_text","name":"text","class":"input-text","placeholder":"заполните поле","value":"","required":"true","style":"display: block; width: 300px; fontsize: 20px; margin:5px"}},"4":{"label":{"for":"id_tel","formText":"Номер телефона","style":"display: block; fontsize: 20px; margin:5px"}},"5":{"input":{"type":"tel","id":"id_tel","name":"tel","class":"input-tel","placeholder":"+7","value":"+7","required":"true","style":"display: block; width: 300px; fontsize: 20px; margin:5px"}},"6":{"label":{"for":"id_email","formText":"Адрес электронной почты","style":"display: block; fontsize: 20px; margin:5px"}},"7":{"input":{"type":"email","id":"id_email","name":"email","class":"input-email","placeholder":"Ваш e-mail","value":"","required":"false","style":"display: block; width: 300px; fontsize: 20px; margin:5px"}},"8":{"p":{"formText":"Ваш пол","style":"display: block; fontsize: 20px; margin:10px 5px 5px 5px"}},"9":{"label":{"for":"id_radio1","formText":"Мужской","style":"display: inline-block; width: 65px; fontsize: 20px; margin: 0 0 0 5px"}},"10":{"input":{"type":"radio","id":"id_radio1","name":"gender","class":"input-radio","value":"male","style":"display: inline-block; width: 30px"}},"11":{"label":{"for":"id_radio2","formText":"Женский","style":"display: inline-block; width: 65px; fontsize: 20px"}},"12":{"input":{"type":"radio","id":"id_radio2","name":"gender","class":"input-radio","value":"female","style":"display: inline-block; width: 30px"}},"13":{"label":{"for":"id_radio3","formText":"Не скажу","style":"display: inline-block; width: 65px; fontsize: 20px"}},"14":{"input":{"type":"radio","id":"id_radio3","name":"gender","class":"input-radio","value":"0","style":"display: inline-block; width: 30px","checked":"true"}},"15":{"p":{"formText":"Что предпочитаете?","style":"display: block; fontsize: 20px; margin:10px 5px 5px 5px"}},"16":{"label":{"for":"id_checkbox1","formText":"Чай","style":"display: inline-block; width: 30px; fontsize: 20px; margin: 0 0 0 5px"}},"17":{"input":{"type":"checkbox","id":"id_checkbox1","name":"checkbox","class":"checkbox","value":"tea","style":"display: inline-block; width: 30px"}},"18":{"label":{"for":"id_checkbox2","formText":"Кофе","style":"display: inline-block; width: 35px; fontsize: 20px; margin: 0 0 0 5px"}},"19":{"input":{"type":"checkbox","id":"id_checkbox2","name":"checkbox","class":"checkbox","value":"cofe","style":"display: inline-block; width: 30px"}},"20":{"label":{"for":"id_checkbox3","formText":"Покрепче","style":"display: inline-block; width: 65px; fontsize: 20px; margin: 0 0 0 5px"}},"21":{"input":{"type":"checkbox","id":"id_checkbox3","name":"checkbox","class":"checkbox","value":"stronger","checked":"true","style":"display: inline-block; width: 30px"}},"22":{"p":{"formText":"Любимый автор","style":"display: block; fontsize: 20px; margin:10px 5px 5px 5px"}},"23":{"select":{"name":"select[]","size":"1","style":"display: block; width: 306px; margin: 5px"}},"24":{"option":{"formText":"   --   --   --   --   --   --   --   --   ","value":"","style":"display: block; width: 60px; fontsize: 20px; margin: 5px"}},"25":{"option":{"formText":"Толстой","value":"tolstoy","style":"display: block; width: 60px; fontsize: 20px; margin: 5px"}},"26":{"option":{"formText":"Некрасов","value":"nekrasov","style":"display: block; width: 60px; fontsize: 20px; margin: 5px"}},"27":{"option":{"formText":"Гоголь","value":"gogol","style":"display: block; width: 60px; fontsize: 20px; margin: 5px"}},"28":{"textarea":{"placeholder":"введите текст","name":"textarea","style":"display: block; width: 300px; height: 100px; fontsize: 20px; margin: 5px"}},"29":{"button":{"id":"","type":"reset","formText":"очистить","value":"reset","name":"button","style":"display: block; width: 307px; height: 50px; margin: 5px"}},"30":{"button":{"id":"","type":"submit","formText":"отправить форму","value":"submit","name":"button","style":"display: block; width: 307px; height: 50px; margin: 5px"}},"postmessage":{"userMessage":"Если Вы это читаете, значит JSON файл успешно обработан, и будет создана форма опроса. Успешной работы!"}}';

isJsonString(jsonForm);

// * функция парсинга строки JSON и выявления ошибок в строке JSON *
function isJsonString(str) {
	try {

		let object = JSON.parse(str);// * Парсинг строки JSON в объект arr
		return createForm(object);

	} catch (error) { // * Выявление ошибок, для дальнейшей работы с ними
		console.log(error);
		return alert('Все плохо, строка JSON не читается, кина не будет!!!');
	}
};

// * функция создания формы *
function createForm(arr) {

	// * Создание переменной DOM - дерева будущей формы *
	let DOM_elem;

	// * Запуск циклов для перебора всех элементов, атрибутов и их значений объекта arr *
	for (let key in arr) {

		for (let i in arr[key]) {

			if (key != 'postmessage') { // Проверка на сообщение пользователю postmessage, если не оно, тогда
				DOM_elem = document.createElement(i); // создаем элемент
			};
			for (let j in arr[key][i]) {

				// * Блок условий для проверки булевых значений и создание/удаление соответствующих атрибутов
				if (key == 'postmessage') { // Проверка на сообщение пользователю postmessage,

					alert(arr[key][i]); // вывод сообщения postmessage пользователю
					break; // выход из цикла
				} else if (j == 'formText') {

					let formText = document.createTextNode(arr[key][i][j]); // Создание переменной с текстом
					DOM_elem.append(formText); // Вставка текстового узла в созданный DOM элемент
				} else if (j == 'required' && arr[key][i][j] == 'true') {

					DOM_elem.setAttribute(j, '');
				} else if (j == 'required' && arr[key][i][j] == 'false') {

					DOM_elem.removeAttribute('j', 'false');
				} else if (j == 'disabled' && arr[key][i][j] == 'true') {

					DOM_elem.setAttribute(j, '');
				} else if (j == 'disabled' && arr[key][i][j] == 'false') {

					DOM_elem.removeAttribute('j', 'false');
				} else if (j == 'checked' && arr[key][i][j] == 'true') {

					DOM_elem.setAttribute(j, '');
				} else if (j == 'checked' && arr[key][i][j] == 'false') {

					DOM_elem.removeAttribute('j', 'false');
				} else if (j == 'selected' && arr[key][i][j] == 'true') {

					DOM_elem.setAttribute(j, '');
				} else if (j == 'selected' && arr[key][i][j] == 'false') {

					DOM_elem.removeAttribute('j', 'false');
				} else if (j == 'multiple' && arr[key][i][j] == 'true') {

					DOM_elem.setAttribute(j, '');
				} else if (j == 'multiple' && arr[key][i][j] == 'false') {

					DOM_elem.removeAttribute('j', 'false');
				} else {

					DOM_elem.setAttribute(j, arr[key][i][j]);
				};
			}
			if (i == 'form') {

				document.body.appendChild(DOM_elem); // Создание тега <form></form>
			} else if (i == 'option') {

				let s = document.querySelector('select'); // Получение <select></select>
				s.appendChild(DOM_elem); // Вставка <option></option> в <select></select>
			} else {

				let f = document.querySelector('form'); //  Получение <form></form>
				f.appendChild(DOM_elem); // Вставка созданных элементов формы в <form></form>
			};
		};
	};
}