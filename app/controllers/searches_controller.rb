class SearchesController < ApplicationController
  # Call to views/layouts/application.html.erb:
  layout "application"

  def index
    @app_props = { name: 'Bobby',
                   current_user: current_user
                 }
  end
end
