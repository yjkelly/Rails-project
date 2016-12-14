class CreateDestinations < ActiveRecord::Migration
  def change
    create_table :destinations do |t|
      t.references :accommodation
      t.references :activity
      t.string :name, :limit => 50, :null => false
      t.text :description
      t.string :picture, :limit => 250

      t.timestamps null: false
    end

    puts "*** Adding an index is next ***"
    add_index :destinations, :name

  end
end
