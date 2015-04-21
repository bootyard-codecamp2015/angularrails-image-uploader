class API::Public::ImagesController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: [:upload_file_image]

  def upload_file_image
      @image = Image.create({image_file: params[:file] }) 
      Rails.logger.info params.inspect
  end


end