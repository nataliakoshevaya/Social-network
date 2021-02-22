const initialState = {
    friends: [
        {
            id: 1,
            name: 'Alex',
            img: 'http://archilab.online/images/1/123.jpg'
        },
        {
            id: 2,
            name: 'Ron',
            img: 'https://lh3.googleusercontent.com/proxy/8qe-CT2lsb6xBGcBEerpz54cnT27VW4tlBDzE6qoJRzGskEPHrZtMlKUE7NQbm1dYMHWIUCrxhBPSABPDXVVvG7K7--v-6hL8C6AJKM8Lp3z9RsmWpPKg4T0KFTiQIzL5lO5wgoe6hibSPY_u6PMTJOH_7LWeTeDeNJ4MGCZHA'
        },
        {
            id: 3,
            name: 'Sasha',
            img: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'
        },
        {
            id: 4,
            name: 'Chris',
            img: 'https://discordgid.ru/wp-content/uploads/2020/03/diskord-avatar.jpg'
        }
    ]
}

const sideBarReducer = (state = initialState) => {

    return state;
}

export default sideBarReducer;