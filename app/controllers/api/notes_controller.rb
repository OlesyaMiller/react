class Api::NotesController < ApplicationController

  def index
    render json: Note.all
  end

  def show
    render json: Note.find_by(id: params[:id])
  end

end
