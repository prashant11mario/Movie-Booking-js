export const database =[
    {name:'Harry Potter and the Philosophers Stone',imgUrl:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTYGx6w4wW7xmC8h_UdhyzyxhOV4QZofI0lrgZ7JgMkCyqGG5M_'},
    {name:'Harry Potter and the Chamber of Secrets',imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltzcooPkGcy1fKKqzSuO8U6S9XBpNDR9MuYc9SS_L5AbAn66O'},
    {name:'Harry Potter and the Prisoner of Azkaban',imgUrl:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQ0zi4n9FsH1q8fyGAXi_fkisY2Krs0_iMzNMYmwIh-DlDxiSR'},
    {name:'Harry Potter and the Goblet of Fire',imgUrl:'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT11kynaj_-X2LgSqeZVCBnO4ZcCPFdvS9x273sUEZNOWb9K8dt'},
    {name:'Harry Potter and the Order of the Phoenix',imgUrl:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQifYfr0pZGQDVzoV64YRk6KzbVwgKRBI9jBle8ZOjzVX6KzpuG'},
    {name:'Harry Potter and the Half-Blood Prince',imgUrl:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSR5V1xIqeQunVYB50jo1RYp4duXh7AB5VjxBafTeTRwN6Uchep'},
    {name:'Harry Potter and the Deathly Hallows',imgUrl:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTwUiYm65LgdU10aJscqK0H-gB2LOBVTDX73x67X87ch7rZE57h'},
    {name:'Harry Potter And The Deathly Hallows II',imgUrl:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQhFKHnU5iDgLx2HFMcRmgj2e491OuyiwXvxjlBvFBoScCAEMB0'}
]

export const availibility={
    'Harry Potter and the Philosophers Stone': [1, 2, 5, 8, 9,19,22,20,11],
    'Harry Potter and the Chamber of Secrets': [1, 2, 3, 5, 6,10,11,12,13,14,15,16,17, 24],
    'Harry Potter and the Prisoner of Azkaban': [1, 2, 3, 4, 5, 6,15,16,17,18,19,20,21,22,23,24],
    'Harry Potter and the Goblet of Fire': [4, 6, 8,10,11,12,13,14,15,16],
    'Harry Potter and the Order of the Phoenix': [3, 5, 7, 9,20,21,12,13,19,24],
    'Harry Potter and the Half-Blood Prince': [3,4,5,7,8,10,13,15,18,20,23,25,28],
    'Harry Potter and the Deathly Hallows': [1,5,7,10,12,14,15,17,19,20,22,26,27],
    'Harry Potter and the Deathly Hallows II': [2,3,4,6,8,10,12,15,16,17,19,20,22,23]
}

const fetchMovieList = async() => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(database)
        },500)
    })
}

const fetchMovieAvailibility = async() =>{
    return new Promise((resolve , reject) =>{
        setTimeout(() => {
            for(const m in availibility){
                if( m === movieName) resolve(availibility[m])
            }
            resolve([])
        }, 500)
    })
}

export{fetchMovieList , fetchMovieAvailibility}
