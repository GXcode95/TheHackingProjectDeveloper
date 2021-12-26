class CreateRealEstates < ActiveRecord::Migration[6.1]
  def change
    create_table :real_estates do |t|
      t.string :name
      t.string :image_url, optional: true
      t.integer :price
      t.boolean :sold, default: false
      t.text :description
      t.belongs_to :user, index: true
      t.belongs_to :city, index: true
      t.timestamps
    end
  end
end
