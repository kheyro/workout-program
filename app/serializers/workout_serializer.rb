class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :number_reps, :number_sets, :exercise
  belongs_to :exercise
end
