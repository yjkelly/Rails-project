class CreateBookings < ActiveRecord::Migration
  def change
    create_table :bookings do |t|
      t.references :accommodation
      t.references :destination
      t.references :order
      t.string :status, :limit => 50
      t.decimal :price
      t.integer :number_guests, :limit => 2, :default=>1
      t.date :start_date
      t.date :end_date

      t.timestamps null: false
    end
  end
end
