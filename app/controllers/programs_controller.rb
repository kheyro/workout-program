class ProgramsController < ApplicationController

  def index
    @programs = Program.all
    render json: @programs
  end

  def show
    @program = Program.find_by_id(params[:id])
    render json: @program
  end

  def create
  end

  def destroy
  end

  def update
  end

end
