class SearchesController < ApplicationController
  # Call to views/layouts/application.html.erb:
  layout "application"
  # Flash messages helper:
  include SearchesHelper

  def index
    @props = { user: current_user,
               messages: flash_messages
             }

    session[:current_user] = current_user

    render :index
  end
end
