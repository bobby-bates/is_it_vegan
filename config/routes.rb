Rails.application.routes.draw do
  devise_for :users

  # Regular Rails way to set homepage:
  root 'searches#index'

  namespace :api do
    namespace :v1 do
      resources :searches
    end
  end

  # Calls views/static_pages/index.html.erb:
  # get 'App', to: 'searches#index'

  # Calls views/hello_world/index.html.erb:
  # get 'hello_world', to: 'hello_world#index'

  # React Router needs a wildcard
  get "react-router(/*all)", to: "searches#index"
end
