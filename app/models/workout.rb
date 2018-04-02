class Workout < ApplicationRecord
  belongs_to :exercise
  belongs_to :program

  validates :number_reps, presence:true, numericality: { greater_than: 0}
  validates :number_sets, presence:true, numericality: { greater_than: 0}

end
