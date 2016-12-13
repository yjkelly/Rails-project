class Destination < ActiveRecord::Base

	belongs_to :booking
	has_many :accommodations
	has_many :activities

end
