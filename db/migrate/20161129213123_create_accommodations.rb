class CreateAccommodations < ActiveRecord::Migration
  def change
    create_table :accommodations do |t|
      t.string :name, :limit => 100, :null => false
      t.text :description
      t.string :picture, :limit => 250
      t.string :type, :limit => 25
      t.decimal :price

      t.timestamps null: false
    end

    puts "*** Adding an index is next ***"
    add_index :accommodations, :name

  end
end
