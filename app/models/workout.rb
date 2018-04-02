class Workout < ApplicationRecord
  belongs_to :exercise
  belongs_to :program
end
