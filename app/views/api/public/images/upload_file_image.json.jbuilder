if @image.valid?
  json.success true
  json.image_url @image.image_file.main.url
else
  error = @image.errors.first
  json.success false
  json.error "#{error[0].to_s} #{error[1]}"
end