class CreateBasketItems < ActiveRecord::Migration
  def change
    create_table :basket_items do |t|
      t.references :product
      t.references :order
      t.integer :quantity, :limit => 2
      t.string :status, :limit => 50

      t.timestamps null: false
    end
  end
end
