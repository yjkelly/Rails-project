class CreateProductCategories < ActiveRecord::Migration
  def change
    create_table :product_categories do |t|
      t.string :name, :limit => 25, :null => false
      t.text :description

      t.timestamps null: false
    end

    puts "*** Adding an index is next ***"
    add_index :product_categories, :name

  end
end
