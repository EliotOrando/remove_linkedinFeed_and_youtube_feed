let intervalId = setInterval(() => {
  console.log('trying to remove the element');
  const main = document.getElementById('main');
  if(main){
    main.remove();
    endInterval(intervalId);
  } 

}, 500);

const endInterval = (id) => {
  clearInterval(id);
}

