class CreateBookingActivities < ActiveRecord::Migration
  def change
    create_table :booking_activities do |t|
      t.references :booking
      t.references :activity
      t.string :status, :limit => 50
      t.integer :number_guests, :limit => 2
      t.date :start_date
      t.date :end_date

      t.timestamps null: false
    end
  end
end
