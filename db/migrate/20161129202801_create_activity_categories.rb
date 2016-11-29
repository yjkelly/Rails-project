class CreateActivityCategories < ActiveRecord::Migration
  def change
    create_table :activity_categories do |t|
      t.string :name, :limit => 25, :null => false
      t.text :description

      t.timestamps null: false
    end

    puts "*** Adding an index is next ***"
    add_index :activity_categories, :name

  end
end
