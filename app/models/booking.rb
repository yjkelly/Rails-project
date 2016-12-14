class Booking < ActiveRecord::Base

	belongs_to :order
	has_one :accommodation
	has_one :destination
	has_many :booking_activities

end
