# frozen_string_literal: true

class HelloWorldController < ApplicationController
  # Call to views/layouts/hello_world.html.erb:
  layout "hello_world"

  def index
    @hello_world_props = { name: "Stranger" }
  end
end
