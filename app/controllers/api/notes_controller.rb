class Api::NotesController < ApplicationController

  def index
    render json: Note.all
  end

  def create
    note = Note.new(note_params)
    if note.save
      render json: note
    end
  end

  def show
    render json: Note.find_by(id: params[:id])
  end


  private

  def note_params
    params.require(:note).permit(:title, :summary, :img_url)
  end

end
