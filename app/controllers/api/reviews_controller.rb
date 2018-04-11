class Api::ReviewsController < ApplicationController
  def show
    @review = Review.where(book_id: params[:book_id])
    @book = Book.find_by(id: params[:book_id])
    if @review
      render 'api/books/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def create
    @review = Review.new(review_params)
    @book = Book.find_by(id: params[:book_id])
    @review.user_id = current_user.id 
    if @review.save
      render 'api/books/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])
    @book = Book.find_by(id: params[:book_id])
    if @review.update(review_params)
      render 'api/books/show'
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @book = Book.find_by(id: params[:book_id])
    @review.destroy
    render 'api/books/show'
  end

  private

  def review_params
    params.require(:review).permit(:title, :body, :book_id)
  end

end
