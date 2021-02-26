class AnimalsController < ApplicationController
    
    def index
        @animals = Animal.all
    
        render component: "Animals", props: {animals: @animals}
    end
    def show
        @animal = Animal.find(params[:id])

        render component: "Animal", props: {animal: @animal}
    end
end
