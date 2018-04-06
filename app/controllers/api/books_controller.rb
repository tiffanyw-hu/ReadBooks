class Api::BooksController < ApplicationController

  def index
    @books = Book.all
  end

  def show
    @book = Book.find(params[:id])
    if @book
      render "api/books/show"
    else
      render json: ["No book matching that id"]
    end
  end

end
