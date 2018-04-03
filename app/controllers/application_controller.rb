class ApplicationController < ActionController::API

  rescue_from ActiveRecord::RecordInvalid do |e|
    render json: e.record.errors.full_messages, status: 406
  end

end
