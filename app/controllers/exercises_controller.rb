class ExercisesController < ApplicationController
  def index
    @exercises = Exercise.all.order(name: :asc)
    render json: @exercises, status: 200
  end
end
