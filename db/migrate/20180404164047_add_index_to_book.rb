class AddIndexToBook < ActiveRecord::Migration[5.1]
  def change
    add_index :books, :title
    add_index :books, :author
  end
end
