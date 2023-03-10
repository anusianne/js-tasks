
let ul = document.createElement('ul');
document.body.append(ul);

do {
  let askUser = prompt('Enter a text to list elements', '');
  let li = document.createElement('li');
  document.body.append(li);
} while (askUser);

