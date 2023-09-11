// faz os itens da lista serem ativados/destivados
const sideLinks = document.querySelectorAll(
    '.sidebar .side-menu li a:not(.logout)'
)

sideLinks.forEach((i) => {
    const li = i.parentElement
    i.addEventListener('click', () => {
        sideLinks.forEach((a) => {
            a.parentElement.classList.remove('active')
        })
        li.classList.add('active')
    })
})

// faz o menu fechar e abrir
const menuBar = document.querySelector('.content nav .bx.bx-menu')
const sideBar = document.querySelector('.sidebar')

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close')
})

//para mudar a pesquisa tirar/colocar o x ou a lupa
const searchBtn = document.querySelector('.content nav form .form-input button')
const searchBtnIcon = document.querySelector(
    '.content nav form .form-input button .bx'
)
const searchForm = document.querySelector('.content nav form')

searchBtn.addEventListener('click', (e) => {
    if (window.innerWidth < 576) {
        e.preventDefault
        searchForm.classList.toggle('show')
        if (searchForm.classList.contains('show')) {
            searchBtnIcon.classList.replace('bx-search', 'bx-x')
        } else {
            searchBtnIcon.classList.replace('bx-x', 'bx-search')
        }
    }
})

// ve o tamanho da tela e faz a barra lateral abrir e fechar
window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sideBar.classList.add('close')
    } else {
        sideBar.classList.remove('close')
    }
    // ve o tamanho da tela e muda o estilo da barra de pesquisa
    if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search')
        searchForm.classList.remove('show')
    }
})

const toggler = document.getElementById('theme-toggle')

toggler.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark')
    } else {
        document.body.classList.remove('dark')
    }
})
