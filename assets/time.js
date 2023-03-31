
 const time = document.getElementById('Date');
 const clock = document.getElementById('Time');

 time.textContent = "Today is"+ " " + dayjs(Date()).format('MMMM') +" "+ dayjs(Date()).format('DD') + " " + dayjs(Date()).format('YYYY')
clock.textContent = "It is"+ " " + dayjs(Date()).format('hh:mm A')
