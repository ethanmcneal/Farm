class AnimalsController < ApplicationController
    
    def index
        @animals = Animal.all
    
        render component: "Animals", props: {animals: @animals}
    end
    def show
        @animal = Animal.find(params[:id])
        @hobbies = @animal.hobbies.all

        render component: "Animal", props: {animal: @animal, hobbies: @hobbies}
    end
end
