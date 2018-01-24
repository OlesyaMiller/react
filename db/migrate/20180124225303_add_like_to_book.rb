class AddLikeToBook < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :like, :integer
  end
end
