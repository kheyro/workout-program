class ProgramSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :workouts
  has_many :workouts
end
