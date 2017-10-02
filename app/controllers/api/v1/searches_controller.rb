class Api::V1::SearchesController < ApplicationController
  # Call to views/layouts/application.html.erb:
  layout "application"

  def index
    # binding.pry

    render json: Camper.all
  end
end
