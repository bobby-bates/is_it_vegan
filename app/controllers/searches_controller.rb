class SearchesController < ApplicationController
  # Call to views/layouts/application.html.erb:
  layout "application"
  include SearchesHelper

  def index
    # binding.pry
    @props = { user: current_user,
               messages: flash_messages
             }
    render :index
  end

  def show

  end

  def new

  end

  def create

  end

  def edit

  end

  def update

  end

  def desttroy

  end
end
