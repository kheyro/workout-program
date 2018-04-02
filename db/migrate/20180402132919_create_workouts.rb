class CreateWorkouts < ActiveRecord::Migration[5.1]
  def change
    create_table :workouts do |t|
      t.belongs_to :exercise, foreign_key: true
      t.belongs_to :program, foreign_key: true
      t.integer :number_sets
      t.integer :number_reps

      t.timestamps
    end
  end
end
