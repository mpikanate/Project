import axios, { Axios } from 'axios';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './Homepage';
import Register from './Register';
import Login from './Login';
import Homeapp from './Homeapp'
import page1 from './page1';
import page2 from './page2';
import page3 from './page3';
import page4 from './page4';
import FoodMenu3_5 from './FoodMenu3_5';
import FoodMenu6_12 from './FoodMenu6_12';
import profile from './profile';
import FoodRec3_5 from './FoodRec3_5';
import FoodRec6_12 from './FoodRec6_12';
import page8 from './page8';
import FoodFav3_5 from './FoodFav3_5';
import FoodFav6_12 from './FoodFav6_12';
import FoodSearch3_5 from './FoodSearch3_5'
import FoodSearch6_12 from './FoodSearch6_12';
import Homeapp1 from './Homeapp1';
import Nutrition_details from './Nutrition_details';
import Ingredient_details from './Ingredient_details';
import CookingMethods_details from './CookingMethods_details';
import Weight_Height from './Weight_Height';
import Food from './Food';
import React from 'react';

function App() {
  const [foodList, setFoodList] = useState([]);
  const getFoodList = () => {
    // Axios.get();
  }

  return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/homeapp" component={Homeapp} />
            <Route path="/page1" component={page1} />
            <Route path="/page2" component={page2} />
            <Route path="/page3" component={page3} />
            <Route path="/page4" component={page4} />
            <Route path="/FoodMenu3_5" component={FoodMenu3_5} />
            <Route path="/FoodMenu6_12" component={FoodMenu6_12} />
            <Route path="/profile" component={profile} />
            <Route path="/FoodRec3_5" component={FoodRec3_5} />
            <Route path="/FoodFav3_5" component={FoodFav3_5} />
            <Route path="/FoodSearch3_5" component={FoodSearch3_5} />
            <Route path="/FoodSearch6_12" component={FoodSearch6_12} />
            <Route path="/FoodRec6_12" component={FoodRec6_12} />
            <Route path="/FoodFav6_12" component={FoodFav6_12} />
            <Route path="/page8" component={page8} />
            <Route path="/Homeapp1" component={Homeapp1} />
            <Route path="/Nutrition_details" component={Nutrition_details} />
            <Route path="/Ingredient_details" component={Ingredient_details} />
            <Route path="/CookingMethods_details" component={CookingMethods_details} />
            <Route path="/Weight_Height" component={Weight_Height} />
            <Route path="/food/:foodId" component={Food} />
          </Switch>
        </Router>
      </div>
  );
}

export default App;