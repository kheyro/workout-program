# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


chinup = Exercise.create(name: 'Chin-up', description: 'Chin-up with the bar')
pushup = Exercise.create(name: 'Push-up', description: 'Push-up on the ground')
jumpingJacks = Exercise.create(name: 'Jumping Jacks', description: 'Perdect cardio exercise')
squat = Exercise.create(name: 'Squat', description: 'Workout for powerful legs')
benchPress = Exercise.create(name: 'Bench Press', description: 'Workout for chest')

program1 = Program.create(name: 'Morning Workout', description: 'Right after waking up')
program1.workouts.create(exercise: pushup, number_reps: 12, number_sets: 4)
program1.workouts.create(exercise: chinup, number_reps: 10, number_sets: 3)

program2 = Program.create(name: 'Evening Workout', description: 'Relaxing workout after work')
program2.workouts.create(exercise: squat, number_reps: 10, number_sets: 5)
program2.workouts.create(exercise: benchPress, number_reps: 10, number_sets: 4)
