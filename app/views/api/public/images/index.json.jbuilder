if !@image.nil?
  json.success true
  json.image_url @image.image_file.main.url
else
  json.success false
end