class AddPricesToOrders < ActiveRecord::Migration
  def up
  	change_column :products, :price, :decimal, :precision => 7, :scale => 2
    add_column :products, :active, :boolean

    add_column :orders, :subtotal, :decimal, :precision => 7, :scale => 2
    add_column :orders, :vat, :decimal, :precision => 7, :scale => 2
    add_column :orders, :shipping, :decimal, :precision => 7, :scale => 2
    add_column :orders, :total, :decimal, :precision => 7, :scale => 2

    add_column :basket_items, :unit_price, :decimal, :precision => 7, :scale => 2
    add_column :basket_items, :total_price, :decimal, :precision => 7, :scale => 2
  end

  def down
  	remove_column :basket_items, :total_price
    remove_column :basket_items, :unit_price

    remove_column :orders, :total
    remove_column :orders, :shipping
    remove_column :orders, :vat
    remove_column :orders, :subtotal

    remove_column :products, :active
    change_column :products, :price, :decimal
    
  end
end

