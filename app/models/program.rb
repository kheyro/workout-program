class Program < ApplicationRecord
  has_many :workouts
  has_many :exercises, through: :workouts

  validates :name, presence: true, uniqueness: { case_sensitive: false }
end
