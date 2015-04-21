class Image
	include Mongoid::Document
	include Mongoid::Timestamps

  mount_uploader :image_file, ImageFileUploader
end
