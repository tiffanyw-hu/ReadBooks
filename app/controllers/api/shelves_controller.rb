class Api::ShelvesController < ApplicationController

  before_action :require_logged_in

  def create
    @shelf = Shelf.new(shelf_params)

    if @shelf.save
      render "api/user/show"
    else
      render json: @shelf.errors.full_message, status: 422
    end

  end

  def update
    @shelf = Shelf.find(params[:id])
    
    if @shelf.update(shelf_params)
      render "api/user/show"
    else
      render json: @shelf.errors.full_message, status: 422
    end

  end

  def destroy
    @shelf = Shelf.find(params[:id])
    @shelf.destroy
    render "api/user/show"
  end

  def index
    @shelves = Shelf.all
  end

  def show
    @shelf = Shelf.find(params[:id])
  end

  private

  def shelf_params
    params.require(:shelf).permit(:name, :user_id)
  end

end
