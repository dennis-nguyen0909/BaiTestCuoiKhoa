function renderListProductsUser(){
    const formuser=document.querySelector('.form-user')
    for ( let i=0;i<productUser.length;i++){
        formuser.innerHTML +=`
            <div class="form-user-img">
                <img src="${productUser[i].avatar}" alt="user">
            </div>
            <div class="form-user-text">
                <h4>${productUser[i].name}</h4>
                <span>${productUser[i].title}</span>
                <div class="form-user-text-child">
                    <button >${productUser[i].clothes}</button>
                    <button >${[productUser[i].stom]}</button>
                </div>
            </div>
        `
    }
}
let productUser=[
    {
        id:1,
        avatar: './assets/img/1.png',
        name:'Lelah Nichols',
        title:'Troy, MI,',
        clothes:'Clothes',
        stom:'stom',

       
    },
    {
        id:2,
        avatar: './assets/img/1.png',
        name:'Lelah Nichols',
        title:'Troy, MI,',
        clothes:'Clothes',
        stom:'stom',

       
    },
    {
        id:3,
        avatar: './assets/img/1.png',
        name:'Lelah Nichols',
        title:'Troy, MI,',
        clothes:'Clothes',
        stom:'stom',

       
    },
    {
        id:4,
        avatar: './assets/img/1.png',
        name:'Lelah Nichols',
        title:'Troy, MI,',
        clothes:'Clothes',
        stom:'stom',

       
    },
    {
        id:5,
        avatar: './assets/img/1.png',
        name:'Lelah Nichols',
        title:'Troy, MI,',
        clothes:'Clothes',
        stom:'stom',

       
    },
]