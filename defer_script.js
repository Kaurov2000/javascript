var x = 100000000;
while (x > 0) {
    x=x-1;
}
alert("Этот скрипт с тегом defer не заблокирует загрузку страницы, на то время, пока загружается и выполняется он сам, но будет выполнен в свою очередь");