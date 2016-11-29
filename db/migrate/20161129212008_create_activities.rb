class CreateActivities < ActiveRecord::Migration
  def change
    create_table :activities do |t|
      t.references :activity_category
      t.string :name, :limit => 100, :null => false
      t.text :description
      t.string :picture, :limit => 250
      t.decimal :price

      t.timestamps null: false
    end

	puts "*** Adding an index is next ***"
    add_index :activities, :name

  end
end
