class CreateBookingActivities < ActiveRecord::Migration
  def change
    create_table :booking_activities do |t|
      t.references :booking
      t.references :activity
      
      t.timestamps null: false
    end
  end
end
