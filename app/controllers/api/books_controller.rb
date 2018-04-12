class Api::BooksController < ApplicationController

  def index
    @user = current_user
    @books = Book.all
  end

  def show
    @user = current_user
    @book = Book.find(params[:id])
    if @book
      render "api/books/show"
    else
      render json: ["No book found matching that id"]
    end
  end

end
