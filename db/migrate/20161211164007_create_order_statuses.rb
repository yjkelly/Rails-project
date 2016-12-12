class CreateOrderStatuses < ActiveRecord::Migration
  def change
    create_table :order_statuses do |t|
      t.string :name

      t.timestamps null: false
    end

    add_reference :orders, :order_status, index: true, foreign_key: true
    
  end
end
