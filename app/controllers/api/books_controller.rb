class Api::BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy]

  def index
    @books = Book.all
    render json: @books
  end

  def create
    book = Book.new(book_params)
    if book.save
      render json: book
    else
      render json: { message: @book.errors }, status: 400
    end
  end

  def show
    render json: @book
  end

  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: { message: @book.errors }, status: 400
    end
  end

  def destroy
    if @book.destroy
      render status: 204
    else
      render json: { message: "Unsuccessful Delete" }, status: 400
    end
  end

  private

  def set_book
    @book = Book.find_by(id: params[:id])
  end

  def book_params
    params.require(:book).permit(:title, :author, :img_url, :id, :like)
  end

end
