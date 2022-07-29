class ViewsController < ApplicationController

  def index
    render json: View.all, status: :ok
  end

  def create
    view = View.create(view_params)
    render json: view, status: :created
  end

  private

  def view_params
    params.permit(:user_id, :movie_id)
  end
end
