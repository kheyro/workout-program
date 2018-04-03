class Exercise < ApplicationRecord
  has_many :workouts
  has_many :programs, through: :workouts

  validates :name, presence: true, uniqueness: { case_sensitive: false }
end
