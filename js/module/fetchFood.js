export default function initFetchFood() {
    const listFood = () => {
        const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
        fetch(url).then((response) => {
            return response.json()
        }).then((db) => {
            try {
                const cards = Array.from(document.querySelectorAll('.card'))
                cards.forEach((card, index) => {
                    const img = card.querySelector('img')
                    img.src = db.meals[index].strMealThumb
                    const h4 = card.querySelector('h4')
                    h4.innerText = db.meals[index].strMeal
                    const span = card.querySelector('span')
                    span.innerText = db.meals[index].idMeal
                })
            } catch (error) {
                console.log(error)
            }
        
        })
    
    }
     // async
    listFood()
   const candianFood  = async () => {
       const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian'
       const fetchUrl = await fetch(url)
       const response = await fetchUrl.json()
       const db = await response
       const menus = document.querySelectorAll('.menu')
       console.log(db)
       menus.forEach((menu, index) => {
           const h3 = menu.querySelector('h3')
           h3.innerHTML = db.meals[index].strMeal
           const img = menu.querySelector('img')
           img.src = db.meals[index].strMealThumb
       })
    }

    candianFood()
}