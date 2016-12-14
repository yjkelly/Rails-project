class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.references :product_category
      t.string :name, :limit => 100, :null => false
      t.text :description
      t.string :picture, :limit => 250
      t.decimal :price

      t.timestamps null: false
    end

    puts "*** Adding an index is next ***"
    add_index :products, :name

  end
end
