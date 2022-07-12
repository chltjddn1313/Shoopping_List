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



let id = 0;
function create_li() {
  if (input.value == '') {
    input.focus();
    return
  }
  const item_row = document.createElement('li');
  items.appendChild(item_row);
  item_row.setAttribute('class', 'item__row');
  item_row.setAttribute('data-id', id);
  item_row.innerHTML = `
  <div class="item">
    <span class="item__name">${input.value}</span>
    <button class="item__delete">
      <i class="fas fa-trash-alt" data-id="${id}"></i>
    </button>
  </div>
  <div class="item__divider"></div>`;
  id++;
  input.value = null;
  input.focus();
}

items.addEventListener('click', (e)=> {
  let dataId = e.target.dataset.id;
  if (dataId) {
    
    const del = document.querySelector(`.item__row[data-id="${dataId}"]`);
    del.remove();
  }
});