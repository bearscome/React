import React from 'react';
import PropTypes from 'prop-types'

const foodLike = [
  {
    id : 1,
    name : "kimchi",
    image : 'https://img.hankyung.com/photo/201910/01.20660060.1.jpg',
    rating : 5
  },
  {
    id : 2,
    name : "samgyuopsal",
    image : 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile30.uf.tistory.com%2Fimage%2F9942B3395A3501C304B135',
    rating : 4.8
  },
  {
    id : 3,
    name : "bibimbab",
    image: 'http://food.chosun.com/site/data/img_dir/2012/05/24/2012052401688_0.jpg',
    rating : 5
  },
  {
    id : 4,
    name : "kimbab",
    image :'https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG',
    rating : 5
  }
]

function Food({name, image, rating}) {
  return (
    <>
      <h1>{name}</h1>
      <h4>{rating}</h4>
      <img src= {image} alt={name}/>
    </>
  )
}


function App() {
  return (
    <div>
      {foodLike.map(dish => (
      <Food key={dish.id} name ={dish.name} image={dish.image} rating = {dish.rating}/> 
      )
      )}
    </div>
  )
}


Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

export default App;
