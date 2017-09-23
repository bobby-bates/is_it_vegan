Rails.application.routes.draw do
  devise_for :users
  # Regular Rails way to set homepage:
  # root 'hello_world#index'

  # Calls views/application/index.html.erb:
  get 'application', to: 'static_pages#index'

  # Calls views/hello_world/index.html.erb:
  # get 'hello_world', to: 'hello_world#index'

  # React Router needs a wildcard
  get "react-router(/*all)", to: "static_pages#index"
end
