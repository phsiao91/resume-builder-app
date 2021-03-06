class CreateWorkHistories < ActiveRecord::Migration[6.1]
  def change
    create_table :work_histories do |t|
      t.string :title
      t.string :company
      t.datetime :start_date
      t.datetime :end_date
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
