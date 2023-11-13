
let users = [
    {
        name: 'us1',
        password: 'ps1',
        computers: [
            {
                id: 1,
                mark: 'Aser',
                memory: '1 TB',
                memoryType: 'HDD',
                ram: '16GB',
                cpu: 'intel core i7',
                gpu: 'rtx 2070',
                img: ''
            },
        ],
    },

]

if(!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(users))
}






const currentUser = localStorage.getItem('currentUser')


if(currentUser){
    let prevText = $('h1').text()
    $('.hN1').text(prevText + currentUser)
    // setTimeout(() => {
    //     $('.al1').css({
    //         "display": "block",
    //  })
    // }, 1000);

    setTimeout(() => {
        $('.al1').css({
            "display": "none",
     })
    }, 1000);
    
    
}