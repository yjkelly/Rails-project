json.extract! activity, :id, :name, :description, :picture, :price, :created_at, :updated_at
json.url activity_url(activity, format: :json)