class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.references :user
      t.string :status, :limit => 50

      t.timestamps null: false
    end
  end
end
