class Destination < ActiveRecord::Base

	belongs_to :booking
	has_many :accommodations
	has_many :activities
	validates :name, presence: true, length: {maximum:50}
	validates :description, length: {maximum:65535}
	validates :picture, length: {maximum:250}

end
