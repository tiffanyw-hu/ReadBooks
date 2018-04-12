class Api::ShelvesController < ApplicationController

  before_action :require_logged_in

  def create
    @user = current_user
    @shelf = Shelf.new(shelf_params)

    if @shelf.save
      render "api/shelves/show"
    else
      render json: @shelf.errors.full_message, status: 422
    end

  end

  def update
    @user = current_user
    @shelf = Shelf.find(params[:id])

    if @shelf.update(shelf_params)
      render "api/shelves/show"
    else
      render json: @shelf.errors.full_message, status: 422
    end

  end

  def destroy
    @user = current_user
    @shelf = Shelf.find(params[:id])
    @shelf.destroy
    render "api/shelves/show"
  end

  def index
    @shelves = current_user.shelves
  end

  def show
    @shelf = Shelf.find(params[:id])
  end

  private

  def shelf_params
    params.require(:shelf).permit(:name, :user_id)
  end

end
