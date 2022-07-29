class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :year
      t.string :image
      t.string :link
      t.string :category
      t.string :decade

      t.timestamps
    end
  end
end