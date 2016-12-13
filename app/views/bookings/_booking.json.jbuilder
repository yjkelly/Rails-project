json.extract! booking, :id, :status, :price, :number_guests, :start_date, :end_date, :created_at, :updated_at
json.url booking_url(booking, format: :json)