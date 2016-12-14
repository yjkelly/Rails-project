class BookingActivity < ActiveRecord::Base

	has_one :activity
	belongs_to :booking

end
