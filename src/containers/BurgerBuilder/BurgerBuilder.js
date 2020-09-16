import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import  BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 50,
    cheese: 20,
    meat: 80,
    bacon: 40
};

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice : 20
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const  updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients});
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount > 0){
            const  updatedCount = oldCount - 1;
            const updatedIngredients = {
                ...this.state.ingredients
            };
            updatedIngredients[type] = updatedCount;
            const priceDeduction = INGREDIENT_PRICES[type];
            const oldPrice = this.state.totalPrice;
            const newPrice = oldPrice - priceDeduction;
            this.setState({ totalPrice: newPrice, ingredients: updatedIngredients});
        }
    };

    render(){
        const disabledinfo = {
            ...this.state.ingredients
        };

        for(let key in disabledinfo){
            disabledinfo[key] = disabledinfo[key] <= 0;
        }
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients} />
                <BuildControls
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled={disabledinfo}
                    price={this.state.totalPrice}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;