
class Api::NotesController < ApplicationController
  before_action :set_note, only: [:show, :update, :destroy]

  def index
    @book = Book.find(params[:book_id])
    @notes = @book.notes
    render json: @notes
  end

  def create
    @book = Book.find(params[:book_id])
    @note = @book.notes.build(note_params)
    if @note.save
      render json: @note
    else
      render json: { message: @note.errors }, status: 400
    end
  end

  def show
    @book = @note.book
    render json: @note
  end

  def update
    @book = @review.book
    if @note.update(note_params)
      render json: @note
    else
      render json: { message: @note.errors }, status: 400
    end
  end

  def destroy
    if @note.destroy
      render status: 204
    else
      render json: { message: "Unsuccessful Delete" }, status: 400
    end
  end

  private

  def set_note
    @note = Note.find_by(id: params[:id])
  end

  def note_params
    params.require(:note).permit(:content, :book_id)
  end

end
