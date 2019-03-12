class Api::ShelvingsController < ApplicationController

  def create
    @book = Book.find_by(id: shelving_params[:book_id])
    @user = current_user
    @main_shelves = current_user.shelves.take(3)
    @main_shelves_id = current_user.shelves.pluck(:id).take(3)
    if @main_shelves_id.include?(shelving_params[:shelf_id])
      @main_shelves.each do |shelf|
        shelf.shelvings.find_by(book_id: shelving_params[:book_id]).try(:destroy!)
      end
    end
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
