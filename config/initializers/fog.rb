CarrierWave.configure do |config|

  config.fog_credentials = {
    :provider               => 'AWS',
    :aws_access_key_id      => 'AKIAIF4SPPGBD5RUUJSA',
    :aws_secret_access_key  => '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',
    :region                 => 'us-west-2'
  }

  config.fog_directory = 'sandboxapp-network'
  config.fog_public = true
end