class CreateNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :notes do |t|
      t.string :title
      t.string :summary
      t.string :img_url

      t.timestamps
    end
  end
end
