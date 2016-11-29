json.extract! user, :id, :username, :firstname, :surname, :email, :hashed_password, :avatar, :country, :is_admin, :created_at, :updated_at
json.url user_url(user, format: :json)