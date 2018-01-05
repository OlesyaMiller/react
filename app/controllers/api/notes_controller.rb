class Api::NotesController < ApplicationController
  before_action :set_note, only: [:show, :update, :destroy]

  def index
    @note = Note.all
    render json: @note
  end

  def create
    note = Note.new(note_params)
    if note.save
      render json: note
    else
      render json: { message: @note.errors }, status: 400
    end
  end

  def show
    render json: @note
  end

  def update
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
    params.require(:note).permit(:title, :summary, :img_url)
  end

end
