json.extract! booking_activity, :id, :status, :number_guests, :start_date, :end_date, :created_at, :updated_at
json.url booking_activity_url(booking_activity, format: :json)