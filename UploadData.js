// Select the database to use.
use('PortfolioBackend');

// Insert a few documents into the PortfolioData collection.
db.getCollection('projects').insertMany(
    [
        {
          
            image: 'https://cdn.dribbble.com/userupload/7518943/file/original-b39a16475b25ac10559e04034bd8b9b7.png?compress=1&resize=1504x1128',
            title: 'Project 1',
            github: 'https://github.com/Grace422',
            demo: 'https://dribbble.com/shots/21632973-Online-Crypto-Casino-Mobile-Designs',
        },
        {
       
            image: 'https://cdn.dribbble.com/userupload/7531024/file/original-28960363b0b1e5a03c2f6f1f077c298e.jpg?compress=1&resize=1504x1128',
            title: 'Project 2',
            github: 'https://github.com/Grace422',
            demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
        },
        {
            image: 'https://cdn.dribbble.com/userupload/7474794/file/original-ec5e3ff0615f4ec018a8662d76206bde.jpg?compress=1&resize=1504x1126',
            title: 'Project 3',
            github: 'https://github.com/Grace422',
            demo: 'https://dribbble.com/shots/21617723-Recipe-app-design',
        },
        {
        
            image: 'https://cdn.dribbble.com/userupload/7527073/file/original-a56488a4a04a23bfbeb97cafc030dde5.png?compress=1&resize=1504x1128',
            title: 'Project 4',
            github: 'https://github.com/Grace422',
            demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
        },
        {
     
            image: 'https://cdn.dribbble.com/users/5147614/screenshots/17480773/media/77bbee6dafd811f65d14bd38f4c426ab.png?compress=1&resize=1200x900&vertical=top',
            title: 'Project 5',
            github: 'https://github.com/Grace422',
            demo: 'https://dribbble.com/shots/17480773-NWS-Mobile-App-Exploration',
        },
        {
       
            image: 'https://cdn.dribbble.com/userupload/7528445/file/original-4b13d4c68619e9e932565427083bb19d.jpg?compress=1&resize=1504x1126',
            title: 'Project 6',
            github: 'https://github.com/Grace422',
            demo: 'https://dribbble.com/shots/20177733-Apres-Brand-Identity-Design',
        }

    ]
); 

 