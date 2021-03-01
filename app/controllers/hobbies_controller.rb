class HobbiesController < ApplicationController
    def index
    end

    def show
        @animal = Animal.find(params[:animal_id])
        @hobby = Hobby.find(params[:id])
        render component: "Hobby", props: {hobby: @hobby, animal: @animal}
    end
end
