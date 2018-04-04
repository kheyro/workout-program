class WorkoutsController < ApplicationController
  before_action :set_workout, only: [:show, :update, :destroy]

  def index
    @workouts = Workout.all
    render json: @workouts
  end

  def show
    render json: @workout, status: 200
  end

  def create
    @workout = Workout.new(workout_params)
    @workout.save!
    render json: @workout, status: 201
  end

  def destroy
    @workout.destroy!
    render json: { success_message: 'Successfully deleted!' }, status: 200
  end

  private

    def set_workout
      @workout = Workout.find(params[:id])
    end

    def workout_params
      params.require(:workout).permit(:program_id, :exercise_id, :number_sets, :number_reps)
    end
end
