class FixColumnName < ActiveRecord::Migration
  def change
    rename_column :users, :hashed_password, :password
  end
end
