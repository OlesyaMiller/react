Rails.application.routes.draw do

  namespace :api do
    resources :books do
      resources :notes
    end
  end

end
