class StaticPagesController < ApplicationController
  # Call to views/layouts/application.html.erb:
  layout "application"

  def index
    @app_props = { name: 'Bobby' }
  end
end
