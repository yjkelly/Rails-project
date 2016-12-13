class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, :limit => 25, :null => false
      t.string :firstname, :limit => 50
      t.string :surname, :limit => 50
      t.string :email, :limit => 50, :null => false
      t.string :hashed_password, :limit => 50
      t.string :avatar, :limit => 250
      t.string :country, :limit => 50
      t.boolean :is_admin, :null => false, :default => false

      t.timestamps null: false
    end

    puts "*** Adding an index is next ***"
    add_index :users, :username
    
  end
end
