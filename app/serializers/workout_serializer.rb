class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :program_id, :exercise_id, :number_reps, :number_sets, :exercise
  belongs_to :exercise
end
