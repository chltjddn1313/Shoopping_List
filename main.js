const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const input_btn = document.querySelector('.footer__button');

input_btn.onclick = function() {
  create_li();
}

input.addEventListener('keypress', (key)=> {
  if (key.code == "Enter") {
    create_li();
  }
});

function create_li() {

  if (input.value == '') {
    input.focus();
    return
  }

  const item_row = document.createElement('li');
  item_row.className = 'item__row';
  items.appendChild(item_row);

  const item = document.createElement('div');
  item.className = 'item';
  item_row.appendChild(item);
  
  const item_name = document.createElement('span');
  item_name.className = 'item__name';
  item.appendChild(item_name);
  
  const item_delete = document.createElement('button');
  item_delete.className = 'item__delete';
  item_delete.innerHTML = '<i class="fas fa-trash-alt"></i>';
  item.appendChild(item_delete);

  item_delete.addEventListener('click', ()=> {
    items.removeChild(item_row);
  });
  
  const item_divider = document.createElement('div');
  item_divider.className = 'item__divider';
  item_row.appendChild(item_divider);

  item_name.innerHTML = input.value;

  input.value = null;
  input.focus();
}
