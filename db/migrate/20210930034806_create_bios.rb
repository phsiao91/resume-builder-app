class CreateBios < ActiveRecord::Migration[6.1]
  def change
    create_table :bios do |t|
      t.string :name
      t.string :address
      t.string :phone
      t.string :email
      t.string :linkedin
      t.belongs_to :user, foreign_key: true
      # , null: false, foreign_key: true
      # , null: false, 


      t.timestamps
    end
  end
end
