class Api::V1::SearchesController < ApplicationController
  skip_before_action :verify_authenticity_token
  # Call to views/layouts/application.html.erb:
  layout "application"

  def index
    # binding.pry



    render json: Camper.all
  end
end
