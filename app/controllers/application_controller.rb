class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # Serve JSON:
  respond_to :json
end
