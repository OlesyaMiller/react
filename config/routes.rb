Rails.application.routes.draw do

  namespace :api do
    resources :books do
      resources :notes, except: [:new, :edit]
    end
  end

end
