var n = 0, c = document.getElementById('cart');
document.querySelectorAll('button[data-add]').forEach(function (b) { b.addEventListener('click', function () { n++; c.textContent = 'Panier (' + n + ')'; b.textContent = 'Ajouté'; setTimeout(function () { b.textContent = 'Ajouter' }, 1200) }) });
