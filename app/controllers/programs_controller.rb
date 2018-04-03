class ProgramsController < ApplicationController
  before_action :set_program, only: [:show, :update, :destroy]

  def index
    @programs = Program.all
    render json: @programs
  end

  def show
    render json: @program
  end

  def create
    @program = Program.new(program_params)
    @program.save!
    render json: @program, status: 201
  end

  def destroy
    if @program.destroy!
      render json: { success_message: 'Successfully deleted!' }, status: 200
    end
  end

  def update
    @program.update!(program_params)
    render json: @program
  end

  private

    def set_program
      @program = Program.find(params[:id])
    end

    def program_params
      params.require(:program).permit(:name, :description)
    end

end
