Rails.application.routes.draw do

  devise_for :admins
  # get '/*path', to: 'home#index', constraints: ->(request){ request.format.html? }

  root to: 'home#index'
end
