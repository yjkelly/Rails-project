class ActivityCategory < ActiveRecord::Base

	has_many :activities

	validates_presence_of :name
	validates_length_of :name, :maximum => 100
	validates_presence_of :picture
	validates_length_of :picture, :maximum => 250

end
