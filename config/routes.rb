Rails.application.routes.draw do
  # root 'hello_world#index'

  # Calls views/hello_world/index.html.erb:
  get 'hello_world', to: 'hello_world#index'

end
