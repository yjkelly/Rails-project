class Activity < ActiveRecord::Base

	belongs_to :destination
	belongs_to :booking_activity
	belongs_to :activity_category

	validates_presence_of :name
	validates_length_of :name, :maximum => 100
	validates_presence_of :picture
	validates_length_of :picture, :maximum => 250
	validates_numericality_of :price, :greater_than => 0

end
