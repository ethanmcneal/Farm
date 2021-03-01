class CreateHobbies < ActiveRecord::Migration[6.1]
  def change
    create_table :hobbies do |t|
      t.string :name
      t.text :body
      t.belongs_to :animal, null: false, foreign_key: true

      t.timestamps
    end
  end
end
