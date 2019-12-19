Rails.application.routes.draw do
  devise_scope :admin do
    get "/sign_in" => "devise/sessions#new" # custom path to login/sign_in
    get "/sign_up" => "devise/registrations#new", as: "new_user_registration" # custom path to sign_up/registration
  end

  devise_for :admins, :skip => [:registrations]
  as :admin do
  get 'admins/edit' => 'devise/registrations#edit', :as => 'edit_admin_registration'
  put 'admins' => 'devise/registrations#update', :as => 'admin_registration'
  end

  resources :contacts

  get '/*path', to: 'home#index', constraints: ->(request){ request.format.html? }

  root to: 'home#index'
end
