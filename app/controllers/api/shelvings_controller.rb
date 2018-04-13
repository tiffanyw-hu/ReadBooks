class Api::ShelvingsController < ApplicationController

  def create
    @book = Book.find_by(id: shelving_params[:book_id])
    @user = current_user
    @shelving = Shelving.new(shelving_params)
    if @shelving.save!
      render "api/books/show"
    else
      render json: @shelving.errors.full_messages, status: 422
    end
  end

  def destroy
    @shelving = Shelving.find(params[:id])
    @user = current_user
    @book = Book.find_by(id: @shelving.book_id)
    if @shelving
      @shelving.destroy!
      render "api/books/show"
    else
      render json: @shelving.errors.full_messages, status: 404
    end

  end

  private

  def shelving_params
    params.require(:shelving).permit(:book_id, :shelf_id)
  end

end
