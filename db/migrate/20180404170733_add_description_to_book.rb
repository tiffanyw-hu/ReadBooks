class AddDescriptionToBook < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :description, :string
  end
end
