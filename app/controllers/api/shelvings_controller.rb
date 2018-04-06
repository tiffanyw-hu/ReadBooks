class Api::ShelvingsController < ApplicationController

  def create
    @shelf = Shelf.find_by(id: shelving_params[:shelf_id])
    #trying
    @shelving = Shelving.new(shelving_params)
    if @shelving.save!
      render "api/shelves/show"
    else
      render json: @shelving.errors.full_messages, status: 422
    end
  end

  def destroy
    @shelf = Shelf.find_by(id: shelving_params[:shelf_id])
    @shelving = Shelving.find_by(
    book_id: shelving_params[:book_id],
    shelf_id: shelving_params[:shelf_id]
    )
    if @shelving
      @shelving.destroy!
      render "api/shelves/show"
    else
      render json: @shelving.errors.full_messages, status: 404
    end

  end

  def index
    @shelvings = Shelving.all
  end


  private

  def shelving_params
    params.require(:shelving).permit(:book_id, :shelf_id)
  end

end
