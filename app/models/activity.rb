class Activity < ActiveRecord::Base

	belongs_to :destination
	belongs_to :booking_activity
	belongs_to :activity_category

end
