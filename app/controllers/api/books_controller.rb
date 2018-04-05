class Api::BooksController < ApplicationController

  def index
    @books = Book.all
  end

  def show
    @book = Book.find(id: params[:id])
    if @book
      render "api/books/:id"
    else
      render json: ["No book matching that id"]
    end
  end

end
