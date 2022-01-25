const botao = document.querySelector('.menu');

let aberto = true;

botao.onclick = function() {
    const itensDoMenu =
        document.querySelectorAll('.hidden');
    let sidebar = document.querySelector('.sidebar');
    let search = document.querySelector('.search');
    let menu = document.querySelector('.menu');
    let perfil = document.querySelector('.perfil');
    let logout = document.querySelector('.logout');

    if (aberto == true) {
        for (let i = 0; i < itensDoMenu.length; i++) {
            itensDoMenu[i].style.display = 'none';
        }
        sidebar.style.width = '80px'
        search.style.width = '16%'
        menu.style.left = '28px'
        perfil.style.width = '80px'
        logout.style.marginLeft = '28px'
        aberto = false;
    } else {
        for (let i = 0; i < itensDoMenu.length; i++) {
            itensDoMenu[i].style.display = 'block';
        }
        sidebar.style.width = '250px'
        search.style.width = '80%'
        menu.style.left = '212px'
        perfil.style.width = '251px'
        logout.style.marginLeft = '50px'
        aberto = true;
    }


}