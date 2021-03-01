class DropTableTwo < ActiveRecord::Migration[6.1]
  def change
    drop_table :hobbies
  end
end
